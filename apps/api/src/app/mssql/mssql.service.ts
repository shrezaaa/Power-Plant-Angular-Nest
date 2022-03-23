import { Inject, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MssqlService {
  private readonly _logger = new Logger('db');

  constructor(@Inject('DATABASE_CONNECTION') private sql) {}

  async executeQuery(queryText: string, values?: any): Promise<any> {
    this._logger.debug(`Executing query: ${queryText} (${values})`);
    return this.sql.query(queryText, values);
  }
}
