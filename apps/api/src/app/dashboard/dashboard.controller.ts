import { Controller, Get, Query } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('/yieldTrend')
  async signIn(@Query() params: any): Promise<void> {
    return this.dashboardService.getYieldTrend(params);
  }
}
