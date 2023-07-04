import { Resolver, Args, Arg, Query, Mutation } from "type-graphql";
import { ArgsRegistrarse, ArgsAgregarItem, ArgsDeleteItem, ArgsLogin, IniciarSesion, ArgsAgregarCupon, ArgsAgregarDireccion, ArgsOpinion, ArgsValorar, ArgsUpdateUser, ArgsGetUser, ArgsAgregarFav } from "../../ArgsDefs/argsDefsUser";
import { SendUser } from "../../../TypesDefs/SendUser";
import { Send } from "../../../TypesDefs/Send";

import { registrarse } from "../../Mutations/User/registrarse";
import { DeleteUser } from "../../Mutations/User/DeleteUser";
import { agregarItem } from "../../Mutations/User/agregarItem";
import { DeleteItem } from "../../Mutations/User/DeleteItem";
import { QuitarItem } from "../../Mutations/User/QuitarItem";
import { AgregarDireccion } from "../../Mutations/User/AgregarDireccion";
import { SendCupones } from "../../../TypesDefs/SendCupones";
import { AgregarCupon } from "../../Mutations/User/AgregarCupon";
import { SendMercadoPago } from "../../../TypesDefs/SendMercadoPago";
import { RealizarCompra } from "../../Mutations/User/RealizarCompra";
import { UpdateUser } from "../../Mutations/User/updateUser";
import { getLoginUser } from "../../Querys/User/getLoginUser";
import { GetUsers } from "../../Querys/User/getUsers";
import { AgregarOpinion } from "../../Mutations/User/agregarOpinion";
import { DeleteOpinion } from "../../Mutations/User/deleteOpinion";
import { SendUsers } from "../../../TypesDefs/SendUsers";
import { AgregarFav } from "../../Mutations/User/agregarFavoritoUser";
import { DeleteFavorito } from "../../Mutations/User/deleteFavoritoUser";
import { SendFavoritos } from "../../../TypesDefs/SendFavoritos";
import { GetFavoritos } from "../../Querys/User/getFavoritos";





@Resolver()
export class UserResolver {

    @Mutation(() => SendUser)
    async registrarse(@Args() {nombre, email, password}: ArgsRegistrarse){

        return await registrarse(nombre, email, password)
    }

    @Mutation(() => Send)
    async updateUser(@Args() args: ArgsUpdateUser){

        return await UpdateUser(args)
    }

    @Mutation(() => Send)
    async deleteUsuario(@Arg('tokenUser') tokenUser: string){

        return await DeleteUser(tokenUser)
    }

    @Mutation(() => Send)
    async AgregarItem(@Args() {isbn, cantidad, tokenUser}: ArgsAgregarItem){

        return await agregarItem(isbn, cantidad, tokenUser);
    }

    @Mutation(() => Send)
    async quitarItem(@Args() {isbn, cantidad, tokenUser}: ArgsAgregarItem){

        return await QuitarItem(isbn, cantidad, tokenUser)
    }

    @Mutation(() => Send)
    async deleteItem(@Args() {isbn, tokenUser}: ArgsDeleteItem){

        return await DeleteItem(isbn, tokenUser)
    }

    @Mutation(() => SendUser)
    async agregarDireccionUser(@Args() {tokenUser,nombre, dni,  direccion, AgregarInfo, telefono, cod_postal }:ArgsAgregarDireccion){

        return await AgregarDireccion(tokenUser, nombre, dni, direccion, AgregarInfo, telefono, cod_postal)
    }

    
    @Mutation(() => SendCupones)
    async agregarCupon(@Args() {codigo, tokenUser}: ArgsAgregarCupon){

        return await AgregarCupon(codigo, tokenUser)
    }

    @Mutation(() => SendMercadoPago)
    async realizarCompra(@Arg('tokenUser') tokenUser: string){

        return await RealizarCompra(tokenUser)
    }

    @Mutation(() => Send)
    async agregarOpinion(@Args() {coment, isbn, tokenUser}: ArgsOpinion){

        return await AgregarOpinion(coment, isbn, tokenUser)
    }

    @Mutation(() => Send)
    async deleteOpinion(@Args() {isbn, tokenUser}: ArgsOpinion){

        return await DeleteOpinion(isbn, tokenUser)
    }

    @Mutation(() => Send)
    async agregarFavorito(@Args() {tokenUser, isbn}: ArgsAgregarFav){

        return await AgregarFav(tokenUser, isbn)
    }

    @Mutation(() => Send)
    async deleteFavorito(@Args() {tokenUser, isbn}: ArgsAgregarFav){

        return await DeleteFavorito(tokenUser, isbn)

    }
    
    @Query(() => SendUser)
    async LoginUser(@Args() args: ArgsLogin){

        return await getLoginUser(args)
    }

    @Query(() => SendFavoritos)
    async getFavoritos(@Arg('tokenUser') tokenUser: string){

        return await GetFavoritos(tokenUser)
    }

}