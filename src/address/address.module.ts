import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdressRepository } from './address.repository';


@Module({
  imports: [
    TypeOrmModule.forFeature([AdressRepository],),
    
  ],
  controllers: [AddressController],
  providers: [AddressService]
})
export class AddressModule {}
