import { Inject, Injectable, Logger } from '@nestjs/common';
import { QueryResult, Repository } from 'typeorm';

@Injectable()
export class DatabaseService {
  private readonly _logger = new Logger('db');

  constructor(@Inject('DATABASE_CONNECTION1') private pool: Repository<any>) {}

  async executeQuery(queryText: string, values?: any): Promise<QueryResult> {
    this._logger.debug(`Executing query: ${queryText} (${values})`);
    
    return this.pool.query(queryText);
  }
}
