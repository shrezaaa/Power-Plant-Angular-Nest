import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlantsRepository } from './plants.repository';
import { PlantsController } from './plants.controller';
import { PlantsService } from './plants.service';

@Module({
  imports: [TypeOrmModule.forFeature([PlantsRepository])],
  controllers: [PlantsController],
  providers: [PlantsService],
})
export class PlantsModule {}
