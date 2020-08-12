import { Injectable, NotFoundException } from '@nestjs/common';
import { ClientRepository } from './client.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './client.entity';
import { CreateClientDto } from './dto/createClient.dto';
import { UpdateResult } from 'typeorm';
import { AdressRepository } from 'src/address/address.repository';
import { Adress } from 'src/address/adress.entity';

@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(ClientRepository, AdressRepository)
        private clientRepository: ClientRepository,
        private addressRepository: AdressRepository
    ){}

    getAll():Promise<Client[]> {
        return this.clientRepository.find({relations:['adress']});
    }

    async getClientById(id: number): Promise<Client> {
        const found = await this.clientRepository.findOne(id);

        if(!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }

        return found;
    }
    async getClientWithAddressById(id: number): Promise<Client> {
        const found = await this.clientRepository.findOne({where:{id}, relations:['adress']});

        if(!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }

        return found;
    }
    async createClient(createClientDto: CreateClientDto): Promise<Client> {
        // krijohet addresa me address repository
        const addressEntity = new Adress();
        addressEntity.City = createClientDto.address.City
        //e mer Id e addresese se krijuar dhe ja bashkangjet klientit
        const address = await this.addressRepository.create(addressEntity)

        const client = new Client();

    client.firstName = createClientDto.firstName;
    client.lastName = createClientDto.lastName;
    client.adressId = address.id;

        return this.clientRepository.create(client);
    }


    async deleteClient(id:number) {
        const result = await this.clientRepository.delete(id);

        if(result.affected === 0) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
    }

    async update(client: Client ): Promise<UpdateResult> {
        return await this.clientRepository.update(client.id, client);
    }
}
