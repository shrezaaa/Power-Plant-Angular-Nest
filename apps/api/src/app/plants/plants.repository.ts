import { EntityRepository, Repository } from "typeorm";
import { Plants } from "./plants.entity";

@EntityRepository(Plants)
export class PlantsRepository extends Repository<Plants> {

}
