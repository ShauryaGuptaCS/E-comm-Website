require('dotenv').config();
const express=require('express');
const cors=require('cors');
require('./db/config');
const upload=require('./db/mul');
const app=express();
const User=require('./db/User');
const adminProduct=require('./db/AdminProduct')
const Products=require('./db/Products')

app.use(express.json());
app.use(cors());
app.use('/uploads',express.static('uploads'));

app.post("/signup",async(req,res)=>{
    try{
    const {username,password}=req.body;
    const data=new User(req.body);
    const checkUsername=await User.findOne({username});

    if(checkUsername){
        return res.send({error:"Username already exist"});
    }
    let result=await data.save();

    result=result.toObject();
    delete result.password;
    res.send(result);
    }
    catch(error){
        res.send({ error: 'Internal Server Error' });
       
        }
    }
)


app.post('/login',async(req,res)=>{
    try{
    let result=await User.findOne(req.body).select("-password");
    if(!result){
        return res.send({error:"invalid user or password"});
    }
    res.send(result);
    }
    catch{
        res.send({error:'Internal server error'});
    }
});
app.post('/addAdminProduct',upload.single('image'),async(req,res)=>{
    try{
    const {
        productName,
      category,
      price,
      owner,
      ownerCountry,
      ownerAddress,
      description,
    }=req.body;

    const imageUrl = `/uploads/${req.file.filename}`;

    const data=new adminProduct({
        productName,
      category,
      price,
      owner,
      ownerCountry,
      ownerAddress,
      description,
      imageUrl
    })
    const result=await data.save();

    res.send(result);
    }
    catch{
        res.send({error:"internal server error"});
    }


    
});


app.get('/displayAdmin',async(req,res)=>{
    try{
    const result=await adminProduct.find({});
    res.send(result);
    }
    catch(error){
        res.send({error:error});
    }
})

app.get('/displayProducts',async(req,res)=>{
    try{
    const result=await Products.find({});
    res.send(result);
    }
    catch(error){
        res.send({error:error});
    }
})
app.get('/checkProduct/:key',async(req,res)=>{
    try{
    const result=await Products.findOne({productId:req.params.key});
    if(!result){
        return res.send({error:"Does not consist"});
    }
    res.send(result);
    }
    catch(error){
        res.send({error:error});
    }
})
app.delete('/deleteProduct/:key',async(req,res)=>{
    try{
    const result=await Products.deleteOne({productId:req.params.key});
    res.send(result);
    }
    catch(error){
        res.send({error:error});
    }
})

app.post('/products',async(req,res)=>{
    try{
        const data=new Products(req.body);
        const check=await Products.findOne({productId:req.body.productId});
        console.log(check);
        if(check){
            return res.send({error:"product already exist"});
        }
        let result=await data.save();
        res.send(result);
    }
    catch{
        res.send({error:"internal server error"});
    }
})
const PORT=process.env.PORT;
app.listen(process.env.PORT);
console.log(process.env.PORT);
console.log(process.env.MONGO_URL);