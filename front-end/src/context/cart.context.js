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
        setCartItems((prevCartItems) =>
            prevCartItems.filter((item) => item._id !== id)
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addCartItem, deleteCartItem , totalProduct }}>
            {children}
        </CartContext.Provider>
    );
};
