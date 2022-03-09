import { Controller, Get } from '@nestjs/common';

import { Message } from '@power-plant-angular-nest/api-interfaces';

import { AppService } from './app.service';
import { MssqlService } from './mssql/mssql.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private mssqlService:MssqlService) {}

  @Get('hello')
  getData(): any {
    return this.mssqlService.executeQuery("select * from SolarData.dbo.alarms")
    // return this.appService.getData();
  }
}
