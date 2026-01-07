import ordersService from "../services/orders.service.js"
class OrderController{
    constructor(){}
    async getAllOrders(req,res){
        const orders = await ordersService.getAllOrders()
        res.status(200).json({
            status:200,
            data:orders
        })
    }

    async orderCreate(req,res){
        const data = await ordersService.orderCreate(req.body)
        res.status(data.status).json({
            status:data.status,
            message:data.message
        })
    }

    
}

const orderController = new OrderController()

export default orderController