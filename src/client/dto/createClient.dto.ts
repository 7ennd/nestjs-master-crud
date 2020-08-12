import { IsNotEmpty} from 'class-validator';
import { Adress } from 'src/address/adress.entity';

export class CreateClientDto {
    
    @IsNotEmpty()
    firstName : string;

    @IsNotEmpty()
    lastName : string;

    addressId: number;

}