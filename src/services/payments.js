import pool from "../database/config.js";

class PaymentsService{
    constructor(){}
    async getAllPayments(){
        const payment = await pool.query("select * from payments")
        return payment.rows
    }


   
}

const paymentsService = new PaymentsService()

export default paymentsService