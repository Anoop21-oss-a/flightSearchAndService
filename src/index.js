const express=require("express")
const bodyparser=require("body-parser")
const {City}=require('./models/index')
const{PORT}=require('./config/ServerConfig');
const CityRepositry=require('./repositry/city-repositry')

const setupserver=async()=>{
    const app=express();
    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({extended:true}))
    app.listen(PORT,async()=>{
        console.log(`server started at ${PORT}`);
    });
}
setupserver();