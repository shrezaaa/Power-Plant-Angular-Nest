import { DatePipe } from '@angular/common';

export class YieldTrendChart {
  categories: Array<string> = [];
  currentPowerSeries: Array<any> = [];
  todayYieldSeries: Array<any> = [];
  mode: number;

  constructor(data, mode) {
    let datePipe = new DatePipe('en-US');
    this.mode = mode;
    switch (mode) {
      case 1:
        data.forEach((element) => {
          this.currentPowerSeries.push(element.CurrentPower);
          this.categories.push(element.Time);
          this.todayYieldSeries.push(element.DayPower);
        });
        break;
      case 2:
        data.forEach((element) => {
          this.categories.push(datePipe.transform(element.Day, 'MM/dd'));
          this.todayYieldSeries.push(element.DayPower);
        });
        break;
      case 3:
        data.forEach((element) => {
          this.categories.push(datePipe.transform(element.Month, 'yyyy/MM'));
          this.todayYieldSeries.push(element.MonthPower);
        });
        break;
    }
  }
}
