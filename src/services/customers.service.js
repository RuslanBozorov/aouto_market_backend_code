import pool from "../database/config.js";

class CustomerService{


    async getAllCustomers(){
        const customers = await pool.query("select * from customers")
        return customers.rows
    }

    async customerCreate(data){
        const {fullName,contact} = data
        
        await pool.query("insert into customers(fullName,contact) values($1,$2)",[fullName,contact])

        return {
            success:true,
            message:"Customer success created"
        }

    }

    


}


const customerService = new CustomerService()

export default customerService