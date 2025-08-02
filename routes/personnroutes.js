const express  = require('express');
const routes = express.Router();
const Person = require('./../models/Person');

routes.post('/',async(req,res) =>{
    try{
      const data = req.body; //takes the response data from body parser
      //now create a new model using the mongooose model
      const newperson = Person(data);
      //save the data to the db
      const response = await newperson.save();
      console.log('data saved');
      res.status(200).json(response); 
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'}); 
    }
  })
  routes.get('/',async(req,res)=>{
    try{
    const data = await Person.find();
    console.log('data fetched');
      res.status(200).json(data);
    }
    catch{
      console.log(err);
      res.status(500).json({error:'internal server error'}); 
    }
  })
  routes.get('/:nametype',async(req,res)=>{
    try{
      const nametype = req.params.nametype;
      if( nametype == 'buddy' || nametype == 'scrap' || nametype == 'crap'){
        const response = await Person.find({name: nametype});
        console.log('data fetched');
        res.status(200).json(response);
      }else{
        res.status(400).json({error:'data not defined'});
      }
    }

    catch{
      console.log(err); 
      res.status(500).json({error:'internal server error'}); 
    }
  })

  routes.put('/:id',async(req,res)=>
  {
  try{
    const personId = req.params.id;
    const updatedPersonData = req.body;
  
  const response = await Person.findByIdAndUpdate( personId , updatedPersonData,{
    new : true,
    runValidators:true,
  }) 
  if (!response){
    return res.status(404).json({error : 'person not found'})
  }
  console.log('data updated');
  res.status(200).json(response); 
}
  catch{
    console.log(err); 
    res.status(500).json({error:'internal server error'}); 
  }
  })
  routes.delete('/:id',async(req,res)=>{
    try{
      const dPersonId = req.params.id;
      
      const response = await Person.findByIdAndDelete(dPersonId);
      console.log('data deleted');
      res.status(200).json(response);
    }
    catch{
      console.log(err); 
      res.status(500).json({error:'internal server error'}); 
    }
  })
   
  module.exports = routes;