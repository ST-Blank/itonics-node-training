import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Photo } from "./Photo";

@Entity('user')
export class User {
    
    @PrimaryGeneratedColumn('uuid')
    public id?: string;

    @Column()
    public firstName!: string;

    @Column()
   public lastName!: string;

    @Column()
   public age!: number;

   @OneToMany(()=>Photo,(photo)=>photo.user)
   public photo!:Photo[]
}
