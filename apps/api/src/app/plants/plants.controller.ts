import { Controller, Get } from '@nestjs/common';
import { PlantsService } from './plants.service';

@Controller('plants')
export class PlantsController {
  constructor(private readonly plantsService: PlantsService) {}

  @Get('search')
  async getPlants() {
    return this.plantsService.getPlants();
  }
}
