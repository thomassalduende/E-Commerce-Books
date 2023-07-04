import { getAllAutores } from "../../../TypeOrm/Querys/Autor/getAllAutores";
import { SendAutor } from "../../../TypesDefs/SendAutor";
import { getAutorID } from "../../../TypeOrm/Querys/Autor/getAutorID";


async function GetAutorID(id: number) {

    const message = new SendAutor()

    try{
        const autor = await getAutorID(id)

        message.message = 'Autor Obtenido'
        message.success = true;
        message.autor = autor;

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false
        
        return message;
    }
}

async function GetAllAutores() {

    const message = new SendAutor()

    try{
        const autor = await getAllAutores()

        message.message = 'Autor Obtenido'
        message.success = true;
        message.autor = autor;

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false
        
        return message;
    }
}




export async function getAutor(args: any) {

    if((args.id_autor) && (args.id_autor != '')){
        return GetAutorID(args.id_autor)
    }
    return GetAllAutores()

}