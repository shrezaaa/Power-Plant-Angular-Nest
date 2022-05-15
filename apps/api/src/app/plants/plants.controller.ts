import { Controller, Get, Query } from '@nestjs/common';
import { PlantsService } from './plants.service';

@Controller('plants')
export class PlantsController {
  constructor(private readonly plantsService: PlantsService) {}

  @Get('search')
  async getPlants(@Query() params: any) {
    return this.plantsService.getPlants();
  }
}
