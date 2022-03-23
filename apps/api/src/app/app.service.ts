import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Message } from '@power-plant-angular-nest/api-interfaces';
import { Connection } from 'typeorm';

@Injectable()
export class AppService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  getData(): any {
    return 'hi'
    // return this.dbService.executeQuery('select * from SolarData.dbo.alarms')
    return { message: 'Welcome to api!' };
  }
}
