import { Users } from "../../../Entities/Users";

export async function getFavoritos(id: number) {

    const users = await Users.find({
        relations: {
            favoritos: {
                books: true
            }
        },
        where: {
            id: id
        }
    })

    if(!users[0]){
        throw 'Error, el usuario no existe'
    }

    return users[0].favoritos  
}