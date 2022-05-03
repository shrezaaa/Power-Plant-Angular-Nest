import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitController } from './unit.controller';
import { UnitService } from './unit.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [UnitController],
  providers: [UnitService],
})
export class UnitModule {}
