import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './database/database.env';
import { DashboardModule } from './dashboard/dashboard.module';
import { UnitModule } from './unit/unit.module';
import { PlantsModule } from './plants/plants.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    DashboardModule,
    UnitModule,
    PlantsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
