export class CurveDynamicChart {
  categories: Array<string> = [];
  dataSeries: Array<any> = [];

  Date;
  DeviceId;
  AvgValue;
  MaxValue;
  MinValue;
  constructor(curveColumn, data) {
    this.Date = data[0].Date;
    this.DeviceId = data[0].DeviceId;
    this.AvgValue = data[0].AvgValue;
    this.MaxValue = data[0].MaxValue;
    this.MinValue = data[0].MinValue;

    data.forEach((element) => {
      this.categories.push(element.Time);
      this.dataSeries.push(element.CurrentValue);
    });
  }
}
