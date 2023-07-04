import { crearFacura } from "../TypeOrm/Mutations/Factura/crearFactura";

const mercadopago = require("mercadopago")

export const notificarMP = async (req: any, res: any) => {

    try{
        mercadopago.configure({access_token: 'TEST-2852943679564217-013020-ad2b8c721723039500da72ea560d9926-159107565'})

        const { query } = req;
        const { params } = req;


        let payment: any

        const subject = query.topic || query.type;

        // console.log(subject)

        if(subject == "payment"){

            const paymentID = query.id || query['data.id'];
            payment = await mercadopago.payment.findById(paymentID)
            // console.log('payment.body',payment.body)
            // console.log('payment.body.additional_info', payment.body.additional_info)

            const items = payment.body.additional_info.items
            const status = payment.body.status
            
            // console.log('items', items)
            // console.log(status)

            await crearFacura(items, <string>paymentID, status);

            res.status(200)
        // }else if(subject == "merchant_order"){

        //     const paymentID = query.id || query['data.id'];
        //     payment = await mercadopago.merchant_order.findById(paymentID)

        //     const items = payment.body.adittional_info.items
        //     console.log('merchant_order',payment.body )
        //     const status = payment.body.status

        //     console.log('items merchan_order',{items})

        //     await crearFacura(items, <string>paymentID, status);

        //     res.status(200)

        }else{
            res.status(404)
        }
    }catch(error: any){
        console.log(error)
        return error
    }
}