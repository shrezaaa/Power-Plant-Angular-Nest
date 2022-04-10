import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { Connection, QueryResult, Repository } from 'typeorm';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './auth/user.repository';

@Controller()
@UseGuards(AuthGuard('jwt'))
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectConnection() private readonly connection: Connection
  ) {}

  @Get('hello')
  getData(): any {
    return this.appService.getData();
  }

  @Get('test')
  get(): any {
    return this.connection.query(' select * from SolarData.dbo.alarms').then((result: QueryResult) => {
      
      return result ;
    })
  }
}
