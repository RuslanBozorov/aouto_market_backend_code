import pool from "../database/config.js";

class OrdersService{
    constructor(){}
    async getAllOrders(){
        const orders = await pool.query("select * from orders")
        return orders.rows
    }


    async orderCreate(data){
        const {carId,customerId,start_date,end_date,amount,month_count} = data

        const car = await pool.query("select price from car where id=$1",[carId])

        const percent = car.rows[0].price * 0.2
        
        if(percent > amount){
            return {
                status:400,
                message:"Boshlang'ich tulov yetarli emas"
            }
        }

       const newOrder = await pool.query("insert into orders(carId,customerId,month_count,start_date,end_date) values($1,$2,$3,$4,$5) RETURNING id",
            [carId,customerId,month_count,start_date,end_date]
        )

        const orderId = newOrder.rows[0].id

        await pool.query(
            "insert into payments(orderId,amount) values($1,$2)",[orderId,amount]
        )


        return{
            status:201,
            success:true,
            message:"Orders and payment success created"
        }
        
    }

}

const ordersService = new OrdersService()

export default ordersService