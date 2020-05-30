const express=require('express');
const cors=require('cors');

var PORT=process.env.PORT || 3000;
const app=express();
app.use(cors());

app.get("/",(req,res)=>{
    res.json({
        name: 'Ram',
        age: '10',
        gender: 'Male',
        height: '5ft 4inch'
    });
})

app.listen(PORT,()=>{
    console.log("App is listening to Port 3000");
})