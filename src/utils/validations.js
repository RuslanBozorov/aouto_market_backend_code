import Joi from "joi";

class Validations {
  constructor() {}

   carSchema =
         Joi.object({
      name: Joi.string().alphanum().required(),
      price: Joi.number().required(),
      year: Joi.number().min(2020).max(2025),
    });
  

   orderSchema =
     Joi.object({
        carId:Joi.number().required(),
        customerId:Joi.number().required(),
        start_date:Joi.string().required(),
        end_date:Joi.string().required(),
        month_count:Joi.string().valid(1,3,6).required(),
        amount:Joi.number().required()
    })
  
}


const validation = new Validations()
export default validation