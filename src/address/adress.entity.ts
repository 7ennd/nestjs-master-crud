import { BaseEntity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, Entity } from "typeorm";
import { Client } from "src/client/client.entity";


@Entity()
export class Adress extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Street: string;

    @Column()
    City: string;

    @Column()
    State: string;

    @OneToOne(type => Client, client => client.adress)
    client: Client;
   
}