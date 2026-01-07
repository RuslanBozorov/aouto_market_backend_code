import paymentsService from "../services/payments.service.js"
class PaymentController{
    constructor(){}
    async getAllPayments(req,res){
        const payment = await paymentsService.getAllPayments()
        res.status(200).json({
            status:200,
            data:payment
        })
    }
    
}

const paymentController = new PaymentController()

export default paymentController