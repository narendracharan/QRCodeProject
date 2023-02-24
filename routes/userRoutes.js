const express=require("express")
const router=express.Router()
const userControllers=require("../controllers/userContolers")

router.post("/scan",userControllers.genrateQur)

module.exports=router