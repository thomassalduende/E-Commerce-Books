import { Query, Resolver, Mutation, Args, Arg, Field } from "type-graphql";
import { InsertBook } from "../../Mutations/Book/insertBook";
import { UpdateBook } from "../../Mutations/Book/updateBook";
import { DeleteBook } from "../../Mutations/Book/deleteBook";
import { GetBooks } from "../../Querys/Book/getBooks";
import { SendBook } from "../../../TypesDefs/SendBook";
import { ArgsGetBook, ArgsInsertBook, ArgsUpdateBook } from "../../ArgsDefs/argsDefsBook";
import { Send } from "../../../TypesDefs/Send";




@Resolver()
export class ResolverBook {

    @Mutation(() => SendBook)
    async insertBook(@Args() {isbn, imagen, nombre, precio, stock, descripcion, fecha_ingreso, editorial, descuento, genero, autor}: ArgsInsertBook){

        return await InsertBook(isbn, imagen, nombre, precio, stock, descripcion, fecha_ingreso, editorial, descuento, genero, autor)
    }

    @Mutation(() => SendBook)
    async updateBook(@Args() {isbn_orig, isbn, imagen, nombre, precio, stock, descripcion, fecha_ingreso, editorial, descuento, genero, autor}: ArgsUpdateBook){

        return await UpdateBook(isbn_orig, isbn, imagen, nombre, precio, stock, descripcion, fecha_ingreso, editorial, descuento, genero, autor)
    }

    @Mutation(() => Send)
    async deleteBook(@Arg('isbn') isbn: string){

        return await DeleteBook(isbn)
    }

    @Query(() => SendBook)
    async getBook(@Args() args: ArgsGetBook){
        
        return await GetBooks(args)
    }


}