//server
const express=require("express");
const {PORT}=require("./src/config/serverConfig")
// PORT =6000
const serverstartfunction=async()=>{
    const app=express();
    
    app.listen(process.env.PORT || PORT,()=>{
    
        console.log(`server is running on ${PORT}`)
    })


}
serverstartfunction()