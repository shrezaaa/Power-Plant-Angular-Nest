export class AlarmModel {
  Warning1;
  Warning2;
  Warning3;
  State;
  DeviceId;
  Date;
  Time;
  constructor(el) {
    this.Warning1 = el?.Warning1;
    this.Warning2 = el?.Warning2;
    this.Warning3 = el?.Warning3;
    this.State = el?.State;
    this.DeviceId = el?.DeviceId;
    this.Date = el?.Date;
    this.Time = el?.Time;
  }

  get Alarm(): string {
    let content = '';
    if (this.Warning1) {
      content = this.Warning1;
    } else if (this.Warning2) {
      content = this.Warning2;
    } else {
      content = this.Warning3;
    }
    return content
  }
}
