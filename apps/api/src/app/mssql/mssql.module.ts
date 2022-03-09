import { Module } from '@nestjs/common';
import { connectionConfig } from './database.env';
export const MSSQL_TOKEN = Symbol('mssql');
import { MssqlService } from './mssql.service';
const sql = require('mssql');

const poolFactory = async () => sql.connect(connectionConfig);

@Module({
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: poolFactory,
    },
    MssqlService,
  ],
  exports: [MssqlService],
})
export class MssqlModule {}
