const express = require("express")
const router= express.Router()
// import the model
const Users = require('../model/Users')


// CRUD
//@role: create a new user
//url: http://localhost:5000/api/users/add
router.post('/add',async (req,res)=>{
    const {name,age,email}= req.body
    try{
    const newUser= new Users({name,age,email})

    const user= await newUser.save()
    res.status(200).json(user)
    } catch(error){
        res.status(500).json({msg:error.message})

    }
})
//@role: read all the data
//url:http://localhost:5000/api/users/all
router.get('/all',async (req, res)=>{
    try{
        const users= await Users.find()
        res.status(200).json({users})
    } catch(error){
        res.status(500).json({msg:error.message})
    }
})
//@role: update a user by ID
// url:http://localhost:5000/api/users/edit/:id

router.put("/edit/:id", async (req,res)=>{
    const id= req.params.id
    
    try{
         const user= await Users.findByIdAndUpdate(id,{$set:req.body})
        
        res.status(200).json({user})
    }  catch (error){
        res.status(500).json({msg:error.message})
    }
})
//@role:delete data
//url:http://localhost:5000/api/users/delete/:id

router.delete("/delete/:id",async (req,res)=>{
    const id = req.params.id
    try{
        const user= await Users.findByIdAndDelete(id)
        res.status(200).json(user) 
    }catch(error){
        res.status(500).json({msg:error.message})
    }
})




module.exports= router