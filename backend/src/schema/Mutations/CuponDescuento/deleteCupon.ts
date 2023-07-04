import { deleteCuponDesc } from "../../../TypeOrm/Mutations/Cupon/deleteCuponDesc";
import { Send } from "../../../TypesDefs/Send";


export async function deleteCupon(codigo: string) {

    const message = new Send()

    try{
        await deleteCuponDesc(codigo)

        message.message = 'Cupon eliminado'
        message.success = true

        return message;
        
    }catch(error: any){
        
        message.message = error;
        message.success = false;

        return message;;
    }  
}