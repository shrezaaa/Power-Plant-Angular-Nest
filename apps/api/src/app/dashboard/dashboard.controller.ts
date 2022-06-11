import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DashboardService } from './dashboard.service';
@UseGuards(AuthGuard('jwt'))
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('/yieldTrend')
  async getYieldTrend(@Query() params: any): Promise<void> {
    return this.dashboardService.getYieldTrend(params);
  } 
  
  @Get('/temperatureChart')
  async getTemperatureChart(@Query() params: any): Promise<void> {
    return this.dashboardService.getTemperatureChart(params);
  } 
  
  @Get('/search')
  async getDashboardSearch(@Query() params: any): Promise<void> {
    return this.dashboardService.getDashboardSearch(params);
  }  
  
  @Get('/alarms')
  async getAlarms(@Query() params: any): Promise<void> {
    return this.dashboardService.getAlarms(params);
  }
}
