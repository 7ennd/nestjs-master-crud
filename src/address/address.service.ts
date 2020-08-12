import { Injectable, NotFoundException } from '@nestjs/common';
import { AdressRepository } from './address.repository';
import { InjectRepository } from '@nestjs/typeorm';

import { Adress } from './adress.entity';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(AdressRepository)
        private adressRepository: AdressRepository,
    ){}

    getAllAdress(): Promise<Adress[]> {
        return this.adressRepository.find();
    }
    async getAdressClient(id: number): Promise<Adress>{
        const found = await this.adressRepository.findOne(id);

        if(!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }

        return found;
    }
}
