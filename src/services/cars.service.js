import pool from '../database/config.js'
class CarService{
    constructor(){}

    async getAllCars(){
      const cars = await pool.query("select * from car")
       return cars.rows    
    }

    async carCreate(data){
        const {name,price,year} = data

        await pool.query("insert into car(name,price,year) values($1,$2,$3)",
        [name,price,year]
        ) 

       return{
        success:true,
        message:"Cars success created"
       }
    }
}

const carService = new CarService()

export default carService 