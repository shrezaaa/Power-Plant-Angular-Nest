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
        data.forEach((element, index) => {
          if (
            Math.abs(+element.CurrentPower - data[index - 1]?.CurrentPower) <
              5000 &&
            data[index - 1]?.CurrentPower != null &&
            +element.CurrentPower < 60000
          ) {
            //Remove Hazards
            this.currentPowerSeries.push(+element.CurrentPower / 1000);
          } else {
            this.currentPowerSeries.push(null);
          }
          this.categories.push(element.Time);
          this.todayYieldSeries.push(+element.DayPower / 1000);
        });
        break;
      case 2:
        data.forEach((element) => {
          this.categories.push(datePipe.transform(element.Day, 'MM/dd'));
          this.todayYieldSeries.push(+element.MothPower / 1000);
        });
        break;
      case 3:
        data.forEach((element) => {
          this.categories.push(datePipe.transform(element.Month, 'yyyy/MM'));
          this.todayYieldSeries.push(+element.MonthDayPower / 1000);
        });
        break;
    }
  }
}
