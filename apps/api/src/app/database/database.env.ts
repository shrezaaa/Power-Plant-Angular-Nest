import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../auth/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mssql',
  host: '172.18.16.93',
  port: 1433,
  username: 'solar',
  stream: false,
  extra: { trustServerCertificate: true },
  password: 'solar',
  database: 'SolarData',
  entities: [__dirname + '/../**/*.entity{.ts,.js}',User],
  synchronize: true,
};
