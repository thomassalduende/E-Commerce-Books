import { Genero } from "../../../Entities/Genero";
import { insertAutor } from "../Autor/insertAutor";
import { insertEditorial } from "../Editorial/insertEditorial";

import { formatoFecha } from "../Utilities/formatoFecha";
import { getElementByNombre } from "../Utilities/getElementByNombre";
import { existsBook } from "./existsLibro";
import { getBookIsbn } from "../../Querys/Book/getBookIsbn";

export async function updateBook(   isbn_orig: string,
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

   const existBook = await existsBook(isbn_orig) 

   if (!existBook){
    throw `ERROR, LIBRO CON ISBN ${isbn} NO EXISTE`
   }

   if (!isbn_orig){
    isbn_orig = isbn;
   }

   const book = await getBookIsbn(isbn_orig)
   const exsBook = await book[0];

   if (!(exsBook.isbn == isbn) && (isbn_orig && !(isbn_orig == isbn))){

    exsBook.isbn = isbn;
   }

   exsBook.url_imagen = imagen;
   exsBook.nombre = nombre;
   exsBook.precio = precio;
   exsBook.stock = stock;
   exsBook.descripcion = descripcion;
   exsBook.descuento = descuento;

    if (fecha_ingreso){
        exsBook.fecha_ingreso = fecha_ingreso
    } else {
        exsBook.fecha_ingreso = (formatoFecha(new Date())).toString()
    }

    if (descuento > 0) {
        exsBook.descuento = descuento;
    }

    exsBook.editorial = await insertEditorial(editorial)

    if (autors.length > 0){
        exsBook.autor = []

        for (const autor of autors){
            exsBook.autor.push(await insertAutor(autor))
        }
    }

    if (generos.length > 0){
        exsBook.genero = []

        for (const genero of generos){
            exsBook.genero.push(await getElementByNombre(genero, Genero))
        }
    }else{
        throw `El libro debe contener al menos un genero`
    }


    await exsBook.save();

}