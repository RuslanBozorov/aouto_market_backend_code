import { Router } from "express";
import searchController from '../controllers/search.controller.js'
const route = Router()
    .get("/qarzdorlar",searchController.barchaQarzdorlar)


export default route     