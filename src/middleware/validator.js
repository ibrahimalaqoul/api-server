'use strict';
const validator = (req,res,next)=>{
  const  inputName = req.query.name
  console.log(inputName);
    if (inputName){
         next();
    } else  {
        next("the input is empty ");
    }
   
}
module.exports = validator;
