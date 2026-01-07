import { Router } from "express";
import paymentController from '../controllers/payments.controller.js'
const route = Router()
    .get("/payments",paymentController.getAllPayments)


export default route     