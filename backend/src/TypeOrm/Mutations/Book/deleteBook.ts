import { getBookIsbn } from "../../Querys/Book/getBookIsbn";


export async function deleteBook(isbn: string) {

    const book = await getBookIsbn(isbn)
    
    await book[0].remove()
    
}