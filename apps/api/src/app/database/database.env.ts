import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';

export const ormConnectionConfig: ConnectionOptions = {
  type: 'mssql',
  host: '172.18.16.93',
  port: 1433,
  username: 'solar',
  stream: false,
  extra: { trustServerCertificate: true },
  password: 'solar',
  database: 'SolarData',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mssql',
  host: '172.18.16.93',
  port: 1433,
  username: 'solar',
  stream: false,
  extra: { trustServerCertificate: true },
  password: 'solar',
  database: 'SolarData',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
