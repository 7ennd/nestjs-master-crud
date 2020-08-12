import { Repository, EntityRepository } from "typeorm";
import { Adress } from "./adress.entity";

@EntityRepository(Adress)
export class AdressRepository extends Repository<Adress>{
  
}