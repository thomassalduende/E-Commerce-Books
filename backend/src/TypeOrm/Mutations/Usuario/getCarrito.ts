import { Users } from "../../../Entities/Users";

export async function getCarrito(id: number) {

    const usuario = await Users.find({
        relations: {
            carrito: {
                cupon: true,
                items: {
                    book: true
                }
            },
            direccion: true
        },
        where: {
            id: id
        }

    })

    return usuario
    
}