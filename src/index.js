const express=require("express")
const bodyparser=require("body-parser")
//const{PORT}=require('./config/ServerConfig')
const ApiRoutes=require('./routes/index')
const {Airport,City}=require('./models/index');
const db = require("./models/index");
const PORT=3000;
const SYNC_DB=true;
const setupserver=async()=>{
    const app=express();
    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({extended:true}))
    app.use('/api',ApiRoutes);
    app.listen(PORT,async()=>{
        console.log(`server started at ${PORT}`);
       if(SYNC_DB)
       {
        db.sequelize.sync({alter:true});
       }
       //const airports=await City.getAirports()
    });
   
}
setupserver();