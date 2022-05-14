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

  async getPlants() {
    return await this.plantsRepository.find();
  }
}
