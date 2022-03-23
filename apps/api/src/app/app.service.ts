import { Injectable } from '@nestjs/common';
import { Message } from '@power-plant-angular-nest/api-interfaces';
import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService {
  constructor(private dbService:DatabaseService){}

  getData(): any {
    return this.dbService.executeQuery('select * from SolarData.dbo.alarms')
    return { message: 'Welcome to api!' };
  }
}
