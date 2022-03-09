import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MssqlModule } from './mssql/mssql.module';

@Module({
  imports: [MssqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
