import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}

  getData(): any {
    return { message: 'Welcome to api!' };
  }
}
