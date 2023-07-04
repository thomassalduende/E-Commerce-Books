import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany} from "typeorm";
import { ObjectType, Field, ID, Float, Int } from "type-graphql";
import { LineaCarrito } from "./LineaCarrito";
import { Books } from "./Books";
import { Carrito } from "./Carrito";

@ObjectType()
@Entity()
export class LineaFactura extends BaseEntity{

    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id_linea_factura!: number;

    @Field(type => Int)
    @Column()
    cantidad!: number;

    @Field(type => Float)
    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2
    })
    precio_unitario!: number;

    @Field(type => [Books])
    @OneToOne((type) => Books, (book) => book.isbn, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'isbn'})
    isbn!: Books;

    @Field(type => [Carrito])
    @OneToMany((type) => Carrito, (carrito) =>carrito.id_carrito, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'id_carrito'})
    carrito!: Carrito[];
    
}