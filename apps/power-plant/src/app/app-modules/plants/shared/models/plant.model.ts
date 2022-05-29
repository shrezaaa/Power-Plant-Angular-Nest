export class PlantModel {
  PlantID;
  PlantName;
  Lat;
  Long;
  NormalProduction;
  InstalledPower;
  RealProduction;
  Address;
  Phone;
  Description;
  IsActive;
  IsActiveName;
  constructor(el) {
    this.PlantID = el?.PlantID;
    this.PlantName = el?.PlantName;
    this.Lat = el?.Lat;
    this.Long = el?.Long;
    this.NormalProduction = el?.NormalProduction;
    this.InstalledPower = el?.InstalledPower;
    this.RealProduction = el?.RealProduction;
    this.Address = el?.Address;
    this.Phone = el?.Phone;
    this.Description = el?.Description;
    this.IsActive = el?.IsActive;
    this.IsActiveName = el.IsActive ? 'Yes' : 'No';
  }
}
