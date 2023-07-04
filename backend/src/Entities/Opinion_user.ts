import { ObjectType, Field } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Books } from "./Books";
import { Users } from "./Users";


@ObjectType()
@Entity()
export class Opiniones extends BaseEntity {

    @Field()
    @PrimaryColumn()
    nombre_user: string;

    @Field()
    @Column('text')
    opinion!: string

    @Field(type => Users)
    @ManyToOne((type) => Users, (users) => users.id, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'id_user'})
    users: Users;

    @ManyToOne((type) => Books, (books) => books.isbn, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'isbn'})
    book: Books;


}