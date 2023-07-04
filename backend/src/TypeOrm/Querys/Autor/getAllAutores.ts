import { Autor } from "../../../Entities/Autor";

export async function getAllAutores() {
    const autor = Autor.find()
    
    return autor;
}