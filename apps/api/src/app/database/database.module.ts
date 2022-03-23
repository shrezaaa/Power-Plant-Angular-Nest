import { Inject, Injectable, Module } from '@nestjs/common';
import { createConnection, Repository } from 'typeorm';
import { ormConnectionConfig } from './database.env';
import { DatabaseService } from './database.service';

const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION1',
    useFactory: async () => await createConnection(ormConnectionConfig),
  },
  DatabaseService,
];
@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
