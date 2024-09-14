const {CityService, CityService}=require('../services/index')
 const cityService=new CityService();

 const create=async(req,res) =>{
    try{
          const city=await cityService.createCity(req.body)
          return res.status(201).json({
            data:city,
            success:true,
            message:'successfully created a city',
            err:{}
          });
    }
    catch(error)
    {
       console.log(error);
       return res.status(500).json({
        data:{},
        success:false,
        message:'not able to create city',
        err:error
       });
    }
    //delete->city/:id
    const destroy=async(req,res)=>{
        try{
            const response=await cityService.deleteCity(req.param.id)
          return res.status(200).json({
            data:response,
            success:true,
            message:'successfully deleted a city',
            err:{}
          });

        }catch(error)
        {
            console.log(error);
            return res.status(500).json({
             data:{},
             success:false,
             message:'not able to delete city',
             err:error
            });
        }
    }
    //get ->city/:id
    const get=async(req,res)=>{
        try{
            const response=await cityService.getCity(req.body)
          return res.status(201).json({
            data:response,
            success:true,
            message:'successfully fetch a city',
            err:{}
          });


        }catch(error)
        {
            console.log(error);
            return res.status(500).json({
             data:{},
             success:false,
             message:'not able to get city',
             err:error
            })
        }
    }

    //patch -> city/:id ->req.body
    const update=async(req,res)=>{
        try{
            const response=await cityService.updateCity(req.param.id,req.body)
          return res.status(201).json({
            data:response,
            success:true,
            message:'successfully updated city',
            err:{}
          });
        }catch(error)
        {
            console.log(error);
            return res.status(500).json({
             data:{},
             success:false,
             message:'not able to update city',
             err:error
            })
        }
    }
 }
