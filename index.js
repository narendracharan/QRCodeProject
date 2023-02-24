const dotenv=require("dotenv")
dotenv.config()
const express=require("express")
const app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
require("./models/config")
const userRoutes=require("./routes/userRoutes")
app.use("/",userRoutes)
app.set("view engine","ejs")

app.use(express.static("public"))

app.get("/download",(req,res)=>{
    res.render("index")
})

app.get("/download-file",(req,res)=>{
   res.download("./controllers/qr.png")
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running port no : ${process.env.PORT}`);
})
