import { SendBook } from "../../../TypesDefs/SendBook";
import { getBookAuthor } from "../../../TypeOrm/Querys/Book/getBookAuthor";
import { getBookGenero } from "../../../TypeOrm/Querys/Book/getBookGenero";
import { getBookIsbn } from "../../../TypeOrm/Querys/Book/getBookIsbn";
import { getBookNombre } from "../../../TypeOrm/Querys/Book/getBookNombre";
import { getAllBooks } from "../../../TypeOrm/Querys/Book/getAllBooks";



async function FuncionGetLibros(args: any) {

    if(args.autor && args.autor != ''){
        return await getBookAuthor(args.autor)

    }else if(args.genero && args.genero != ''){
        return await getBookGenero(args.genero)

    }else if(args.isbn && args.isbn != ''){
        return await getBookIsbn(args.isbn)

    }else if(args.nombre && args.nobre != ''){
        return await getBookNombre(args.nombre)
    }

    return getAllBooks() 

}

export async function GetBooks(args: any){

    const message = new SendBook()

    try{

        const book = await FuncionGetLibros(args)

        message.message = 'Books Obtenidos'
        message.success = true;
        message.book = book

        return message

    }catch(error: any){
        message.message = error;
        message.success = false;
        
        return message;
    }
}

