const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    number:{
        type:String,
        require:true
    },
})
schema.set("timestamps",true)
module.exports=mongoose.model("user",schema)