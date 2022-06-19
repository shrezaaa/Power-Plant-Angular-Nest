export class TemperatureChart {
  categories: Array<string> = [];
  currentTemperature: Array<any> = [];
  series = new Map<number, Array<any>>();

  constructor(data) {
    data.forEach((element, index) => {
      this.series.forEach((value, key) => {
        if (key == element.DeviceId) {
          // console.log(value);
          // debugger
          if (
            value[value.length - 1] == undefined ||
            Math.abs(+element.CurrentValue - +value[value.length - 1]) < 5
          ) {
            value.push(element.CurrentValue);
          } else {
            value.push(null)
          }
        } else if (value.length < this.categories.length) {
          value.push(value[value.length - 1]);
        }
        // this.series.set(key,value)
      });

      if (!this.series.has(element.DeviceId)) {
        let temp = [];
        this.categories.forEach(() => {
          temp.push(null);
        });

        this.series.set(element.DeviceId, temp);
      }

      if (data[index - 1]?.Time != element.Time) {
        // console.log(this.series.has(element.DeviceId));

        this.categories.push(element.Time);

        // console.log(this.series.get(4))

        // console.log(element.Time);
      }
      // this.currentTemperature.push(element.CurrentValue);
    });
  }
}
