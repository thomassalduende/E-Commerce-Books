import { Users } from "../../../Entities/Users";

export async function quitarItem(isbn: string, cantidad: number, id: number) {

    const user = await Users.find({
        relations: {
            carrito: {
                items: {
                    book: true
                }
            }
        },
        where: {
            id: id
        }
    })

    if(user[0].carrito.items){
        const pos = user[0].carrito.items.findIndex(item => item.book.isbn == isbn)

        if(pos != -1){

            if(user[0].carrito.items[pos].cantidad = user[0].carrito.items[pos].cantidad - (+cantidad))

            await user[0].carrito.items[pos].save()

        }else{

            await user[0].carrito.items[pos].remove()
        }
    }
}