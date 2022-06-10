import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { Connection, QueryResult, Repository } from 'typeorm';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { XMLParser } from 'node_modules/fast-xml-parser';
import { SharedUtil } from './shared/shared.util';
// const { XMLParser, XMLBuilder, XMLValidator} = require("../src/fxp");

@Controller()
// @UseGuards(AuthGuard('jwt'))
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
    return this.connection.query('execute test_2').then((result: any) => {
      return SharedUtil.parseObjectData(result[0]);
    });
  }
}
