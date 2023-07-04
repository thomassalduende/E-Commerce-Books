import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Users } from "./Users";
import { Books } from "./Books";


@ObjectType()
@Entity()
export class Favoritos extends BaseEntity {

    @Field()
    @PrimaryGeneratedColumn()
    id_favoritos: number;

    @Field(type => Users)
    @ManyToOne((type) => Users, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'id_user'})
    users: Users;

    @Field(type => Books)
    @ManyToOne((type) => Books, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'isbn'})
    books: Books;
}