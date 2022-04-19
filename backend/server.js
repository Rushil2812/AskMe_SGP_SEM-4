const express = require('express')
const app=express()
const path=require('path')
const bodyParser = require('body-parser')
const cors=require('cors')
const PORT=80
const db=require('./db')
const router=require('./routes')

//db connection
db.connect();

app.use(bodyParser.json({limit:"50mb"}))
app.use(bodyParser.urlencoded({extented:true,limit:"50mb"}))

app.use((req,res,next)=>{
    req.header("Access-Control-Allow-origin","*")
    req.header("Access-Control-Allow-Headers","*")
    next()

})

//routs
app.use('/api',router);



app.use('uploads',express.static(path.join(__dirname,"/../uploads")))
app.use(express.static(path.join(__dirname,"/../frontend/build")));


app.get("*",(req,res)=>{
    try{
            res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`))
    }
    catch(e)
    {
            res.send("404 NOT FOUND")
    }
})

app.use(cors())
app.listen(process.env.PORT||PORT,()=>{
    console.log(`Listening on port no ${PORT}`)
})