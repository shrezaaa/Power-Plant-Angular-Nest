import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../auth/user.entity';
import { Plants } from '../plants/plants.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mssql',
  host: '@hostname',
  port: 1433,
  username: '@username',
  stream: false,
  extra: { trustServerCertificate: true },
  password: '@password',
  database: 'SolarData',
  entities: [User, Plants],
  synchronize: true,
};
