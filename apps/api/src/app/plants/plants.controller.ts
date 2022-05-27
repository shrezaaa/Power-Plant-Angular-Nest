import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PlantsService } from './plants.service';

@UseGuards(AuthGuard('jwt'))
@Controller('plants')
export class PlantsController {
  constructor(private readonly plantsService: PlantsService) {}

  @Get('search')
  async getPlants(@Query() params: any) {
    return this.plantsService.getPlants(params);
  }
}
