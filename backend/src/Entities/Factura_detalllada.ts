import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Factura } from "./Factura";
import { Books } from "./Books";
import { Field, ID, Int, ObjectType, Float } from "type-graphql";


@ObjectType()
@Entity()
export class Factura_detalle extends BaseEntity{

    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(type => Int) 
    @Column()
    cantidad!: number;

    @Field(type => Float)
    @Column({
        type: 'decimal',
        precision: 9, 
        scale: 2,
    })
    precio!: number;

    @ManyToOne((type) => Factura, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'id_factura'})
    factura!: Factura;

    @Field(type => Books)
    @ManyToOne((type) => Books, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'isbn'})
    book: Books;
}