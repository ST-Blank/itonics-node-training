import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {
    isActive!: boolean;
    save() {
      throw new Error('Method not implemented.');
    }

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column()
    age!: number;

}
