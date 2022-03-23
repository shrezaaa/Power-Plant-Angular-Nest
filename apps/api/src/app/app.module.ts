import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './database/database.env';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
