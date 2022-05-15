import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlantsRepository } from './plants.repository';

@Injectable()
export class PlantsService {
  private logger = new Logger('PlantsService');
  constructor(
    @InjectRepository(PlantsRepository)
    private plantsRepository: PlantsRepository
  ) {}

  async getPlants(params) {
    const { PlantName, PlantID, InstalledPowerFrom, InstalledPowerTo } = params;
    let query = `execute Plant_Search @PlantID = ${
      PlantID ?? null
    }, @PlantName = ${
      PlantName ? `'${PlantName}'` : null
    }, @InstalledPowerFrom = ${
      InstalledPowerFrom ? `'${InstalledPowerFrom}'` : null
    }, @InstalledPowerTo = ${
      InstalledPowerTo ? `'${InstalledPowerTo}'` : null
    }`;
    this.logger.debug('Plant Search')
    return await this.plantsRepository.query(query);
  }
}
