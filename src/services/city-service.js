const {CityRepositry}=require('../repositry/city-repositry');

class CityService{
    constructor(){
        this.CityRepositry=new CityRepositry();
    }
    async createCity(data)
    {
        try{
            const city=await this.CityRepositry.createCity(data);
            return city;
        }catch(error){
            console.log("something went wrong");
            throw {error};
        }
    }
    async deleteCity(cityId)
    {
        try{
            const response=await this.CityRepositry.deleteCity(cityId);
            return response;
        }catch(error){
            console.log("something went wrong");
            throw {error};
        } 
    }
    async getCity(cityId)
    {
        try{
             const city=await this.CityRepositry.getCity(cityId);
             return city
        }catch(error){
            console.log("something went wrong");
            throw {error};
        }
    }
    async updateCity(cityId,data)
    {
        try{
             const city=await this.CityRepositry.updateCity(cityId,data);
             return city;
        }catch(error){
            console.log("something went wrong");
            throw {error};
        }
    }
}