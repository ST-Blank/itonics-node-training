import {Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity('photo')
export class Photo{

    @PrimaryGeneratedColumn('uuid')
    public id?:string;

     @Column()
    public userId?:string;

    @Column()
    public photoName?:string;

@ManyToOne(()=>User,(user)=>user.photo,{
    onDelete:'CASCADE'
})

public user!:User;
}
