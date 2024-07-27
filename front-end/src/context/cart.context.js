import React, { createContext, useContext, useState } from "react";

const CartContext = createContext({
    cartItems: [],
    totalProduct:0,
    addCartItem: (item) => {},
    deleteCartItem: (id) => {}
});

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalProduct,setTotalProduct] = useState(0)
    const addCartItem = (item) => {
        setTotalProduct((prevTotal) => prevTotal + 1);
        setCartItems((prevCartItems) => {
            const existingItemIndex = prevCartItems.findIndex(
                (i) => i._id === item._id
            );

            if (existingItemIndex > -1) {
                // Item exists, update quantity
                return prevCartItems.map((i, index) =>
                    index === existingItemIndex
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            } else {
                // Item does not exist, add it
                return [...prevCartItems, { ...item, quantity: 1 }];
            }

        });
    };

    const deleteCartItem = (id) => {
        setTotalProduct(totalProduct - 1)
        setCartItems((prevCartItems) => {
            // Find the item to update
            const updatedCartItems = prevCartItems.map((item) => {
                if (item._id === id) {
                    // Decrease the quantity by 1
                    const updatedQuantity = item.quantity - 1;
                    
                    // Return the item with updated quantity
                    return updatedQuantity > 0 
                        ? { ...item, quantity: updatedQuantity }
                        : null; // Return null if quantity is zero
                }
                return item;
            });
            console.log(updatedCartItems);
            // Remove items that are null (i.e., quantity reached zero)
            return updatedCartItems.filter((item) => item !== null);
        });
    };
    

    return (
        <CartContext.Provider value={{ cartItems, addCartItem, deleteCartItem , totalProduct }}>
            {children}
        </CartContext.Provider>
    );
};
