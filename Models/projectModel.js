const mongoose=require('mongoose')

const projectSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    overview:{
        type:String,
            required:true
    },
    languages:{
        type:String,
        required:true
    },
    github:{
        type:String,
        required:true
    },
    demo:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})

const projects=mongoose.model('projects',projectSchema)

module.exports=projects