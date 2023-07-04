import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { ObjectType, Field, } from "type-graphql";
import { Users } from "./Users";
import { LineaCarrito } from "./LineaCarrito";
import { CuponDeDescuento } from "./CuponDeDescuento";


@ObjectType()
@Entity()
export class Carrito extends BaseEntity{

    @Field({nullable: true})
    @PrimaryGeneratedColumn()
    id_carrito!: number;

    @OneToOne(() => Users, (users) => users.carrito,{
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'id'})
    users: Users;

    @Field(type => [LineaCarrito])
    @OneToMany((type) => LineaCarrito, (linea_carrito) => linea_carrito.carrito,{
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    public items?: LineaCarrito[];

    @Field(type => CuponDeDescuento)
    @OneToOne((type) => CuponDeDescuento, (cupon) => cupon.codigo, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'codigo'})
    cupon: CuponDeDescuento;
}