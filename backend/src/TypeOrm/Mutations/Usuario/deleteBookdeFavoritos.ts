import { Users } from "../../../Entities/Users";


export async function deleteFavorito(id: number, isbn: string){


    const users = await Users.find({
        relations: {
            favoritos: true,
        },
        where: {
            id: id
        }
    })

    if (users[0].favoritos){
        const pos = users[0].favoritos.findIndex(obj => obj.books.isbn === isbn);
        users[0].favoritos.splice(pos, 1);
        
        await users[0].save();
    }
}