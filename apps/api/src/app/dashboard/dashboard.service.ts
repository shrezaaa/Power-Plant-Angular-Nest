import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class DashboardService {
  private logger = new Logger('DashboardService');

  constructor(@InjectConnection() private readonly connection: Connection) {}

  async getYieldTrend(params) {
    let query = `select
    CONVERT (date,DataTime) as Date,
    left (CONVERT(VARCHAR(10), CONVERT(DATETIME, DataTime, 0), 108),5) as Time,
    cast (avg(CurrentA+CurrentB+CurrentC) as decimal(10,2)) as CurrentPower,
    cast (avg(DayPower) as decimal(10,2)) as DayPower from InvDataInput inv
             where CONVERT (date,DataTime)=CONVERT(date,'2021-04-26')
             group by left (CONVERT(VARCHAR(10), CONVERT(DATETIME, DataTime, 0), 108),5),
                      CONVERT (date,DataTime)
             order by left (CONVERT(VARCHAR(10), CONVERT(DATETIME, DataTime, 0), 108),5)`;
    this.logger.debug('getYieldTrend');
    return await this.connection.query(query);
  }
}
