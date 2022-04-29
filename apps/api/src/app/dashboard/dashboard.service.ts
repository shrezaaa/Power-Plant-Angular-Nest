import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class DashboardService {
  private logger = new Logger('DashboardService');

  constructor(@InjectConnection() private readonly connection: Connection) {}

  async getYieldTrend(params) {
    let query = ``;
    const { mode, date } = params;
    switch (mode) {
      case '1':
        query = `select
          CONVERT (date,DataTime) as Date,
          left (CONVERT(VARCHAR(10), CONVERT(DATETIME, DataTime, 0), 108),5) as Time,
          cast (avg(CurrentA+CurrentB+CurrentC) as decimal(10,2)) as CurrentPower,
          cast (avg(DayPower) as decimal(10,2)) as DayPower from InvDataInput inv
             where CONVERT (date,DataTime)=CONVERT(date,'${date}')
             group by left (CONVERT(VARCHAR(10), CONVERT(DATETIME, DataTime, 0), 108),5),
                      CONVERT (date,DataTime)
             order by left (CONVERT(VARCHAR(10), CONVERT(DATETIME, DataTime, 0), 108),5)`;
        break;
      case '2':
        query = `select CONVERT (date,DataTime) as Day,
        max(DayPower) as DayPower
                 from InvDataInput
                 where DATEDIFF (day,DataTime,'${date}') between 0 and 31
                 group by CONVERT (date,DataTime)
                 order by CONVERT (date,DataTime)`;

        break;
      case '3':
        query = `select left (xday, 7) as Month,
        sum(mdaypower) as MonthPower
                 from DayPower
                 where DATEDIFF (day,xday,'${date}') between 0 and 365
                 group by left (xday, 7)
                 order by left (xday, 7)`;
        break;
    }
    this.logger.debug(query);
    return await this.connection.query(query);
  }
}
