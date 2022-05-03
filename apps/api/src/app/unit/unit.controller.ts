import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UnitService } from './unit.service';

@UseGuards(AuthGuard('jwt'))
@Controller('unit')
export class UnitController {
  constructor(private readonly unitService: UnitService) {}

  @Get('/search')
  async getUnits(@Query() params: any): Promise<void> {
    return this.unitService.getUnits(params);
  }

  @Get('/invAnalysis')
  async getInvAnalysisData(@Query() params: any): Promise<void> {
    return this.unitService.getInvAnalysisData(params);
  }
}
