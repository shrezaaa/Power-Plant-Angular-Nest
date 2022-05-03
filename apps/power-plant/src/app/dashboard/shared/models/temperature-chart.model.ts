export class TemperatureChart {
  categories: Array<string> = [];
  currentTemperature: Array<any> = [];

  constructor(data) {
    data.forEach((element) => {
        this.categories.push(element.Time);
        this.currentTemperature.push(element.CurrentTemperature);
      });
  }
}
