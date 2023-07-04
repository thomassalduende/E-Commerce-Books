import { insertBook } from "../../../TypeOrm/Mutations/Book/insertBook";
import { SendBook } from "../../../TypesDefs/SendBook";

export async function InsertBook(isbn: string, 
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
        const book = await insertBook(isbn, 
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
        
        message.message = `LIBRO INSERTADO CON EXITO`;
        message.success = true;


        if (book.isbn == null){
            message.message = `EL LIBRO YA EXISTE`
            message.success = false
        }

        message.book.push(book)

        return message;

    }catch(error){
        return error;
    }

}
    




