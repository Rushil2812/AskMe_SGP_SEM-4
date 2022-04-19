const express=require('express');
const router=express.Router();

const questionDB=require('../models/Question')

router.post('/',async(req,res)=>{
    console.log(req.body)

    try{
        await questionDB.create({
            questionName:req.body.questionName,
            questionUrl:req.body.questionUrl
        }).then(()=>{
            res.status(201).send({
                staus:true,
                message:"Question Added succesfully"
            })
        }).catch((err)=>{
            res.status(400).send({
                staus:false,
                message:"Bad Format"
            })
        })
    }catch(e)
    {
        res.status(500).send({
            status:false,
            message:"Error While Adding Question"
        })
    }
});

router.get('/',async(req,res)=>{
    try{
            await questionDB.aggregate([{
                $lookup:{
                    from:"answers",
                    localField:"_id",
                    foreignField:"questionId",
                    as:"allAnswers",
                }
            }]).exec().then((doc)=>{
                res.status(200).send(doc)
            }).catch((error)=>{
                res.status(500).send({
                    status:false,
                    message:"Sorry Can't get answer"
                })
            })
    }catch(e){
        res.status(500).send({
            status:false,
            message:"Unexpected error"
        })
    }
})

module.exports=router