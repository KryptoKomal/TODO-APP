const mongoose= require("mongoose")

const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        requires:true,
    },
    description:{
        type:String,
        require:true,
    }
})

module.exports= mongoose.model("Todo",todoSchema)