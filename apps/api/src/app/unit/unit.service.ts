import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class UnitService {
  private logger = new Logger('DashboardService');
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async getUnits(params) {
    const { DeviceTypeID } = params;
    let query = `execute Unit_Search @UnitName = null, @DeviceTypeID = ${DeviceTypeID}`;
    this.logger.debug(query);
    return await this.connection.query(query);
  }

  async getInvAnalysisData(params) {
    const { DateTime, DeviceTypeID } = params;
    let query = `execute InvAnalysis_Search @DateTime = '${DateTime}', @DeviceTypeID = ${DeviceTypeID}`;
    this.logger.debug(query);
    return await this.connection.query(query);
  }
}