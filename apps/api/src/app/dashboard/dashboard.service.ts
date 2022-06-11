import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { SharedUtil } from '../shared/shared.util';

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

  async getDashboardSearch(params) {
    const { date, PlantID } = params;
    let query = `execute Dashboard_Search @Date = '${date}', @PlantID = ${
      PlantID ?? 1
    } `;
    this.logger.debug(query);
    return await this.connection.query(query).then((result) => {
      return SharedUtil.parseObjectData(result[0]);
    });
  }

  async getAlarms(params) {
    const { date, PlantID } = params;
    let query = `execute Alarms_Search @Date = '${date}', @PlantID = ${
      PlantID ?? 1
    } `;
    this.logger.debug(query);
    return await this.connection.query(query)
  }
}
