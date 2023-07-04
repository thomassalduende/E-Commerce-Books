import { Books } from "../../../Entities/Books"

export async function getAllBooks() {
    const books = Books.find({
        relations: {
            editorial: true,
            genero: true,
            autor: true
        }
    })

    return books;
}