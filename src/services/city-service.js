const CityRepository =require('../repositry/city-repositry');
class CityService{
    constructor(){
        this.cityRepositry= new CityRepository();
    }
    async createCity(data)
    {
        try{
            const city=await this.cityRepositry.createCity(data);
            return city;
        }catch(error){
            console.log("something went wrong");
            throw {error};
        }
    }
    async deleteCity(cityId)
    {
        try{
            const response=await this.cityRepositry.deleteCity(cityId);
            return response;
        }catch(error){
            console.log("something went wrong");
            throw {error};
        } 
    }
    async getCity(cityId)
    {
        try{
             const city=await this.cityRepositry.getCity(cityId);
             return city
        }catch(error){
            console.log("something went wrong");
            throw {error};
        }
    }
    async updateCity(cityId,data)
    {
        try{
             const city=await this.cityRepositry.updateCity(cityId,data);
             return city;
        }catch(error){
            console.log("something went wrong");
            throw {error};
        }
    }
    async getAllcities(filter)
    {
        try{
            const cities=await this.cityRepositry.getAllcities({name :filter.name});
            return cities;
        } catch(error)
        {
            console.log("something went wrong");
            throw {error};
        }
    }
}
module.exports=CityService;