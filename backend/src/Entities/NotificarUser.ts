import { Field, ID, ObjectType } from 'type-graphql';
import {BaseEntity,Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import { Users } from './Users';


@ObjectType()
@Entity()
export class Notificacion extends BaseEntity {

    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    notificacion: string;

    @Field((type) => Users) 
    @ManyToOne((type) => Users, (users) => users.id,{
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'id_user'})
    users!: Users;
}