import { Autor } from "../../../Entities/Autor";

export async function getAutorID(id: number) {

    const autor = await Autor.find({
        where: {
            id_autor: id
        }
    })

    return autor;
    
}