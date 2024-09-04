const dotenv=require('dotenv')
const { process_params } = require('express/lib/router')
dotenv.config();
module.export={
    PORT:process.env.PORT,
}