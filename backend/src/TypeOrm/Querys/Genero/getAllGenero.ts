import { Genero } from "../../../Entities/Genero";


export async function getAllGenero() {

    const genero = Genero.find()

    return genero
}