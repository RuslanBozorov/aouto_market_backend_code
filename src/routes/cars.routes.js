import { Router } from "express";
import carController from "../controllers/cars.controller.js";
import validation from "../middleware/validation.js";
const router = Router()

router
    .get("/cars",carController.getAllCars)
    .post("/cars",validation,carController.carCreate)



export default router    