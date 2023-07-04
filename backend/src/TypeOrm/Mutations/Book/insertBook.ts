import { Books } from "../../../Entities/Books";
import { Genero } from "../../../Entities/Genero";
import { insertAutor } from "../Autor/insertAutor";
import { insertEditorial } from "../Editorial/insertEditorial";
import { getElementByNombre } from "../Utilities/getElementByNombre";


import { formatoFecha } from "../Utilities/formatoFecha";



export async function insertBook(isbn: string, 
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
    const book = new Books();

    book.isbn = isbn;
    book.url_imagen = imagen;
    book.nombre = nombre;
    book.precio = precio;
    book.stock = stock;
    book.descripcion = descripcion;
    book.descuento = descuento;

    if (fecha_ingreso != 'null'){
        book.fecha_ingreso = fecha_ingreso
    } else {
        book.fecha_ingreso = (formatoFecha(new Date())).toString()
    }

    if (descuento > 0) {
        book.descuento = descuento;
    }

    book.editorial = await insertEditorial(editorial)

    if (autors.length > 0){
        book.autor = []

        for (const autor of autors){
            book.autor.push(await insertAutor(autor))
        }
    }

    if (generos.length > 0){
        book.genero = []

        for (const genero of generos){
            book.genero.push(await getElementByNombre(genero, Genero))
        }
    }else{
        throw `El libro debe contener al menos un genero`
    }

    await book.save();

    return book;
    
}