const mongoose = require('mongoose')
const schema= mongoose.Schema

const UserSchema= schema({
    
    name: {
        type: String,
        required: true
    },
    age: Number, 
    email:{
        type:String,
        Unique:true,
        required:true
    }
})
module.exports=Users= mongoose.model("User", UserSchema)