import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class UnitService {
  private logger = new Logger('DashboardService');
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async getUnits(params) {
    const { DeviceTypeID, DeviceName } = params;
    let query = `execute Unit_Search @DeviceName = ${
      DeviceName ? `'${DeviceName}'` : null
    }, @DeviceTypeID = ${DeviceTypeID ?? null}`;
    this.logger.debug(query);
    return await this.connection.query(query);
  }

  async getInvAnalysisData(params) {
    const { DateTime, DeviceID } = params;
    let query = `execute InvAnalysis_Search @DateTime = '${DateTime}', @DeviceID = ${DeviceID}`;
    this.logger.debug(query);
    return await this.connection.query(query);
  }
}
