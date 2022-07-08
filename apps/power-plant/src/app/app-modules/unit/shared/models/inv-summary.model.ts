import { NameValueDetailSection } from 'apps/power-plant/src/app/shared/components/detail-section/detail-section.component';
import { ReplaceUnderlinePipe } from 'apps/power-plant/src/app/shared/pipes/replace-underline.pipe';

export class InvSummary {
  AvgTemperature;
  MaxTemperature;
  AvgCurrent;
  MaxCurrent;
  MaxDayPower;
  AvgVoltage;
  MaxVoltage;

  constructor(data) {
    this.AvgTemperature = data?.AvgTemperature;
    this.MaxTemperature = data?.MaxTemperature;
    this.AvgCurrent = data?.AvgCurrent;
    this.MaxCurrent = data?.MaxCurrent;
    this.MaxDayPower = data?.MaxDayPower;
    this.AvgVoltage = data?.AvgVoltage;
    this.MaxVoltage = data?.MaxVoltage;
  }

  get detailSectionItems(): Array<NameValueDetailSection> {
    let replaceUnderLine = new ReplaceUnderlinePipe();
    return [
      {
        name: 'Average Power',
        value: replaceUnderLine.transform(this.AvgCurrent) + ' kW',
      },
      {
        name: 'Maximum Power',
        value: replaceUnderLine.transform(this.MaxCurrent) + ' kW',
      },
      {
        name: 'Average Voltage',
        value: replaceUnderLine.transform(this.AvgVoltage) + ' V',
      },
      {
        name: 'Maximum Voltage',
        value: replaceUnderLine.transform(this.MaxVoltage) + ' V',
      },

      {
        name: 'Average Temperature',
        value: replaceUnderLine.transform(this.AvgTemperature) + ' °C',
      },
      {
        name: 'Maximum Temperature',
        value: replaceUnderLine.transform(this.MaxTemperature) + ' °C',
      },
      {
        name: 'Maximum Day Power',
        value: replaceUnderLine.transform(this.MaxDayPower) + ' kWh',
      },
    ];
  }
}
