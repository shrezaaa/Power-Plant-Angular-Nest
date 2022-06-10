export class PowerChart {
  categories: Array<string> = [];
  currentASeries: Array<any> = [];
  currentBSeries: Array<any> = [];
  currentCSeries: Array<any> = [];
  dayPowerSeries: Array<any> = [];
  constructor(data) {
    data.forEach((element) => {
      this.categories.push(element.Time);
      this.currentASeries.push(element.CurrentA);
      this.currentBSeries.push(element.CurrentB);
      this.currentCSeries.push(element.CurrentC);
      this.dayPowerSeries.push(element.DayPower);
    });
  }
}
