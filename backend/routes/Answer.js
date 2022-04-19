const express=require('express');
const router=express.Router();

const answerDB=require('../models/Answer')

router.post('/',async(req,res)=>{
    try{
        await answerDB.create({
            answer:req.body.answer,
            questionId:req.body.questionId

        }).then(()=>{
            res.status(201).send({
                status:true,
                message:"Answer is added"
            })
        }).catch((error)=>{
            res.status(400).send({
                status:false,
                message:"Bad Request"
            })
        })
    }catch(e){
        res.status(500).send({
            status:false,
            message:"Something wrong happened"
        })
    }
})

module.exports=router