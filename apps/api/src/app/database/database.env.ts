import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../auth/user.entity';
import { Plants } from '../plants/plants.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mssql',
  host: '172.18.16.52',
  port: 1433,
  username: 'solar',
  stream: false,
  extra: { trustServerCertificate: true },
  password: 'solar',
  database: 'SolarData',
  entities: [User, Plants],
  synchronize: true,
};
