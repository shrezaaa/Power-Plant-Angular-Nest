import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@UseGuards(AuthGuard('jwt'))
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get('hello')
  getData(): any {
    return this.appService.getData();
  }
}
