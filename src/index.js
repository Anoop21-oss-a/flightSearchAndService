const express=require("express")
const bodyparser=require("body-parser")
//const{PORT}=require('./config/ServerConfig')
const ApiRoutes=require('./routes/index')
const PORT=3000;
const setupserver=async()=>{
    const app=express();
    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({extended:true}))
    app.use('/api',ApiRoutes);
    app.listen(PORT,async()=>{
        console.log(`server started at ${PORT}`);
    });
}
setupserver();