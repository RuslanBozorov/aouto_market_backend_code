import { Router } from "express";
const route = Router()
import customersController from '../controllers/customers.controller.js'

route
    .get("/customers",customersController.getAllCustomers)
    .post("/customers",customersController.customerCreate)


    
export default route    