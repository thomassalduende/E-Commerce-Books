import { Books } from "../../../Entities/Books";

export async function getBookGenero(genero: string) {

    const book = await Books.find({
        relations: {
            editorial: true,
            genero: true,
            autor: true
        },
        where: {
            genero:{
                nombre: genero
            }
        }
    })

    return book;
}