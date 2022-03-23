import { Controller, Get } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Controller('auth')
export class AuthController {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  @Get('h')
  fb() {
    return this.connection.query('select * from SolarData.dbo.alarms');
  }
}
