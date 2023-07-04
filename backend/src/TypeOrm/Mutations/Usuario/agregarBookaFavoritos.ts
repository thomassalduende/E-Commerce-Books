import { Books } from "../../../Entities/Books";
import { Users } from "../../../Entities/Users";
import { Notificacion } from "../../../Entities/NotificarUser";
import { Favoritos } from "../../../Entities/Favoritos_user";


export async function agregarFav(id: number, isbn: string) {

    const users = await Users.find({
        relations: {
            opinion: true,
            favoritos: true
        },
        where: {
            id: id,
        }
    })

    const books = await Books.find({
        where: {
            isbn: isbn
        }
    })


    if(users[0].favoritos){

        const notificacion = new Notificacion()
        const favorito = new Favoritos();
        favorito.books = books[0];
        favorito.users = users[0];

        notificacion.notificacion = `'${books[0].nombre}' se agregó a favoritos`;
        notificacion.users = users[0];

        await notificacion.save()
        await favorito.save()
    }

}
