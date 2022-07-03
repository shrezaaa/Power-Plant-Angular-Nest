import { PlantModel } from '../../../app-modules/plants/shared/models/plant.model';

export class DashboardDataModel {
  activePlantsCount = 0;
  deActivePlantsCount = 0;

  onlineInvertersCount = 0;
  offlineInvertersCount = 0;

  onlineCombinersCount = 0;
  offlineCombinersCount = 0;

  temperatureSummary = {
    AvgTemperature: 0,
    MaxTemperature: 0,
  };

  powerSummary = {
    avgCurrentPower: 0,
    maxCurrentPower: 0,
  };

  currentPlant: PlantModel = new PlantModel({});
  constructor(data) {
    this.activePlantsCount = data.activePlantsCount ?? this.activePlantsCount;
    this.onlineInvertersCount =
      data.onlineInvertersCount ?? this.onlineInvertersCount;
    this.offlineInvertersCount =
      data.offlineInvertersCount ?? this.offlineInvertersCount;

    this.onlineCombinersCount =
      data.onlineCombinersCount ?? this.onlineCombinersCount;
    this.offlineCombinersCount =
      data.offlineCombinersCount ?? this.offlineCombinersCount;

    this.deActivePlantsCount =
      data.deActivePlantsCount ?? this.deActivePlantsCount;

    this.temperatureSummary =
      data.temperatureSummary ?? this.temperatureSummary;

    this.powerSummary = data.powerSummary ?? this.powerSummary;

    this.currentPlant = new PlantModel(data?.currentPlant);
  }
}
