const express =require('express')
const aiRoutes=require('./Routes/ai.routes')

const cors=require('cors')
const app=express()


app.use(cors())
app.get('/',(req,res)=>{
    res.send("hello worls")
})

app.use(express.json())

app.use('/ai',aiRoutes)

module.exports=app