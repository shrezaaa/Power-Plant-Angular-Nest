import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class DashboardService {
  private logger = new Logger('DashboardService');

  constructor(@InjectConnection() private readonly connection: Connection) {}

  async getYieldTrend(params) {
    const { mode, date } = params;
    let query = `execute YieldTrend_Search @Mode = ${mode} ,@Date = '${date}'`;
    this.logger.debug(query);
    return await this.connection.query(query);
  }
  
  async getTemperatureChart(params) {
    const { date } = params;
    let query = `execute TemperatureChart_Search @Date = '${date}'`;
    this.logger.debug(query);
    return await this.connection.query(query);
  }
}
