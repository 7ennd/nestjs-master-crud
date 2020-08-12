import { Repository, EntityRepository } from "typeorm";
import { Client } from "./client.entity";
import { CreateClientDto } from "./dto/createClient.dto";

@EntityRepository(Client)
export class ClientRepository extends Repository<Client> {
  async createClient(createClientDto: CreateClientDto):Promise<Client> {
    const client = new Client();

    client.firstName = createClientDto.firstName;
    client.lastName = createClientDto.lastName;
    client.adressId = createClientDto.addressId;
    await client.save();

    return client;
  }  
}