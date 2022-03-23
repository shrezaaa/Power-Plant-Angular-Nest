import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(@InjectConnection() private readonly connection: Connection) {}
}
