export class PlantModel {
  PlantID;
  PlantName;
  Lat;
  Lang;
  NormalProduction;
  RealProduction;
  Address;
  Phone;
  Description;
  IsActive;
  constructor(el) {
    this.PlantID = el?.PlantID;
    this.PlantName = el?.PlantName;
    this.Lat = el?.Lat;
    this.Lang = el?.Lang;
    this.NormalProduction = el?.NormalProduction;
    this.RealProduction = el?.RealProduction;
    this.Address = el?.Address;
    this.Phone = el?.Phone;
    this.Description = el?.Description;
    this.IsActive = el?.IsActive;
  }
}