const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
     
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/crud11');
}

const userSchema  = new mongoose.Schema({
    name:String,
    email:String,
    password:Number
})

const userModel = mongoose.model("user",userSchema)


app.get('/',(req,res)=>{
     
       userModel.find({})
       .then((users)=>res.json(users))
       .catch((err)=>res.json(err))
})

app.post('/createUser',(req,res)=>{
              userModel.create(req.body)
             
    res.send("hello from backend")
})




app.listen(4000,()=>console.log("server is started"))