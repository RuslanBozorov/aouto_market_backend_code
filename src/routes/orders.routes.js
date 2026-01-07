import { Router } from "express";
import orderController from '../controllers/orders.controller.js'
import validation from '../middleware/validation.js'
const route = Router()
    .get("/orders",orderController.getAllOrders)
    .post("/orders",validation,orderController.orderCreate)


    
export default route     