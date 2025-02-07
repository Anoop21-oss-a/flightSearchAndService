const { where } = require('sequelize');
const {City}=require('../models/index');
const {Op}=require('sequelize');


class CityRepository{
    async createCity({name}){
        try{
            const city=await City.create({name});
            return city
        }catch(error)
        {
            console.log("something went wrong")
            throw {error}
        }
    }
    async deleteCity(cityId)
    {
        try{
            await City.destroy({
                where:{
                id:cityId
            }});
            return true;
        }catch(error)
        {
            console.log("something went wrong")
            throw {error}
        }
    }
    async updateCity(cityId,data)
    {
        try{
            const city=await City.update(data,{
                where:{
                    id:cityId,
                }
            });
            return city;
        }catch(error)
        {
           console.log("something went wrong ")
           throw {error}
        }
    }
    async getCity(cityId)
    {
        try{
            const city=await City.findByPk(cityId, {
                attributes: ['id', 'name', 'createdAt', 'updatedAt']  // Only fetch valid columns
            });
            return city;
        }
        catch(error)
        {
           console.log("something went wrong")
           throw {error}
        }
    }
    async getAllcities(filter)
    {
        try{
            if(filter.name){
              const cities=await City.findAll({
                attributes: ['id', 'name','createdAt', 'updatedAt'],
                where:{
                    name:{
                        [Op.startsWith]: filter.name
                    }
                }
              });
              return cities;}
        } catch(error)
        {
            console.log("something went wrong")
           throw {error}
        }
    }
    
}
module.exports = CityRepository;