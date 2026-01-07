import carService from "../services/cars.js"
class CarController{
    constructor(){}

    async getAllCars(req,res){
      const cars =  await carService.getAllCars()
      res.status(200).json({
        status:200,
        data:cars
      })
    }

    async carCreate(req,res){
        const data = carService.carCreate(req.body)
        res.send(data)
    }
}


const carController = new CarController()


export default carController