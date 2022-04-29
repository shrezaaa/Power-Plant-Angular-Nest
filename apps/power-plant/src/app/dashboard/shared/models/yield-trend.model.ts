export class YieldTrendChart {
  categories: Array<string> = [];
  currentPowerSeries: Array<any> = [];
  todayYieldSeries: Array<any> = [];
  constructor(data) {
    data.forEach((element) => {
      this.currentPowerSeries.push(element.CurrentPower);
      this.categories.push(element.Time);
      this.todayYieldSeries.push(element.DayPower);
    });
  }
}
