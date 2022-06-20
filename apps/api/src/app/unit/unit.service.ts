import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class UnitService {
  private logger = new Logger('DashboardService');
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async getUnits(params) {
    const { DeviceTypeID, DeviceName, DeviceTitleEn } = params;
    let query = `execute Unit_Search @DeviceName = ${
      DeviceName ? `'${DeviceName}'` : null
    }, 
    @DeviceTitleEn = ${DeviceTitleEn ? `'${DeviceTitleEn}'` : null},    
    @DeviceTypeID = ${DeviceTypeID ?? null}`;
    this.logger.debug(query);
    return await this.connection.query(query);
  }

  async getInvAnalysisData(params) {
    const { DateTime, DeviceID } = params;
    let query = `execute InvAnalysis_Search @DateTime = '${DateTime}', @DeviceID = ${DeviceID}`;
    this.logger.debug(query);
    return await this.connection.query(query);
  }

  async getUnitCurve(params) {
    let { Date, DeviceTypeID, DeviceID, Column } = params;
    if (DeviceID == undefined) DeviceID = null;
    let TableName = this.getTableByDeviceType(DeviceTypeID);
    let query = `select
                    CONVERT (date,DataTime) as Date,
                      DeviceId,
                    left (CONVERT(VARCHAR(10), CONVERT(DATETIME, DataTime, 0), 108),5) as Time,
                    cast (avg(${Column}) as decimal(10,2)) as CurrentValue ,
                    max(temp.AvgValue) as AvgValue,
                    max(temp.MaxValue) as MaxValue,
                    max(temp.MinValue) as MinValue
                from ${TableName} inv,
                                      (select cast (avg(${Column}) as decimal(10,2)) as AvgValue,
                                              cast (max(${Column}) as decimal(10,2)) as MaxValue,
                                              cast (min(${Column}) as decimal(10,2)) as MinValue
                                      from ${TableName}
                                      where CONVERT (date,DataTime)=CONVERT(date, '${Date}')) as temp
                where CONVERT (date,DataTime)=CONVERT(date, '${Date}')
                      and (DeviceId = ${DeviceID}) 
                group by left (CONVERT(VARCHAR(10), CONVERT(DATETIME, DataTime, 0), 108),5),
                        CONVERT (date,DataTime),DeviceId
                order by left (CONVERT(VARCHAR(10), CONVERT(DATETIME, DataTime, 0), 108),5)`;
    this.logger.debug(query);
    return await this.connection.query(query);
  }

  getTableByDeviceType(DeviceTypeID): string {
    switch (+DeviceTypeID) {
      case 1:
        return 'CBDataInput';
      case 2:
        return 'InvDataInput';
      case 3:
        return 'WampDataInput';
    }
  }
}
