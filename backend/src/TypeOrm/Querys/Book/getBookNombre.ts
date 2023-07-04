import { ILike } from "typeorm";
import { Books } from "../../../Entities/Books";

export async function getBookNombre(nombre: string) {

    const book = await Books.find({
        relations: {
            editorial: true,
            genero: true,
            autor: true
        },
        where: {
            nombre: ILike(`%${nombre}%`)
        }
    })

    return book;
    
}