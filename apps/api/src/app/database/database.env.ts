import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../auth/user.entity';
import { Plants } from '../plants/plants.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mssql',
  host: '37.228.138.249',
  port: 1433,
  username: 'testnirogah',
  stream: false,
  extra: { trustServerCertificate: true },
  password: '!@#qweASDzxc',
  database: 'SolarData',
  entities: [User, Plants],
  synchronize: true,
};
