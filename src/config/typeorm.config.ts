import { TypeOrmModuleOptions} from '@nestjs/typeorm';
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'remotemysql.com',
    port: 3306,
    username: '6TZlox2rtP',
    password: '6at01LMzZr',
    database: '6TZlox2rtP',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
}