import { Books } from "../../../Entities/Books";

export async function existsBook(isbn: string) {

    const book = await Books.find({
        where: {
            isbn: isbn
        }
    })

    return book[0]? true: false
}