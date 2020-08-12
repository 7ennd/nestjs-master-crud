import { Controller, Param, ParseIntPipe, Get } from '@nestjs/common';
import { AddressService } from './address.service';
import { Adress } from './adress.entity';

@Controller('address')
export class AddressController {
    constructor(private addressService: AddressService){}
    
    @Get()
    getAllAdress(): Promise<Adress[]>{
        return this.addressService.getAllAdress();
    }


    @Get('/:id')
    getAdressClient(@Param('id', ParseIntPipe) id:number): Promise<Adress>{
        return this.addressService.getAdressClient(id);
    }
}
