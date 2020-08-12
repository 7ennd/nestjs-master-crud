import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { Adress } from "src/address/adress.entity";


@Entity()
export class Client extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    
    @Column()
    adressId : number;

    @OneToOne(type => Adress, adress => adress.client)
    @JoinColumn({ name: "adressId"})
    adress: Adress;
 
}