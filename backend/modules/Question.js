const mongoose=require('mongoose');

const QuestionSchema=new mongoose.Schema({
    questionName:String,
    questionUrl:String,
    createdAt:{
        type:Date,
        default:Date.now()
    },
    answer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Answers"
    }
})

module.exports=mongoose.model("Questions",QuestionSchema);