import { updateBook } from "../../../TypeOrm/Mutations/Book/updateBook";
import { SendBook } from "../../../TypesDefs/SendBook";

export async function UpdateBook(isbn_orig: string,
                                isbn: string, 
                                imagen: string,
                                nombre: string,
                                precio: number,
                                stock: number,
                                descripcion: string,
                                fecha_ingreso: string,
                                editorial: string,
                                descuento: number = 0,
                                generos: Array<string>,
                                autors: Array<any>)  
                                
{
    const message = new SendBook()

    try{
        await updateBook(isbn_orig,
                        isbn, 
                        imagen,
                        nombre,
                        precio,
                        stock,
                        descripcion,
                        fecha_ingreso,
                        editorial,
                        descuento,
                        generos,
                        autors) 
        
        message.message = `LIBRO MODIFICADO CON EXITO`;
        message.success = true;

        return message;

    }catch(error: any){
        message.message = error;
        message.success = false;

        return error;
    }

}