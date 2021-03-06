import { Controller, Get, Param, ParseIntPipe, Body, Post, UsePipes, ValidationPipe, Delete, Put } from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './client.entity';
import { CreateClientDto } from './dto/createClient.dto';

@Controller('client')
export class ClientController {
    constructor(private clientService: ClientService ){}

    @Get()
    getAll():Promise<Client[]> {
        return this.clientService.getAll();
    }

    @Get('/:id')
    getClientById(@Param('id', ParseIntPipe) id: number): Promise <Client> {
        return this.clientService.getClientWithAddressById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createClient(@Body() createClientDto: CreateClientDto): Promise<Client> {
        return this.clientService.createClient(createClientDto);
    }

    @Delete('/:id')
    deleteClient(@Param('id', ParseIntPipe) id:number):Promise<void> {
        return this.clientService.deleteClient(id);
    }

    @Put('/:id')
    update(@Param('id') id, @Body() client:Client): Promise<any> {
        client.id= Number(id);
        return this.clientService.update(client);
    }
}
