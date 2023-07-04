import { deleteFavorito } from "../../../TypeOrm/Mutations/Usuario/deleteBookdeFavoritos";
import { Send } from "../../../TypesDefs/Send";
import { verify } from "jsonwebtoken";


export async function DeleteFavorito(tokenUser: string, isbn: string) {

    const message = new Send()

    try {

        const id: number = parseInt(<string>verify(tokenUser,  'secret-key'))

        await deleteFavorito(id, isbn)

        message.message = 'Favorito deleted successfully'
        message.success = true;

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false;

        return message;
    }
}