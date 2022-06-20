export class Unit {
  DeviceId;
  PhaseNo;
  DeviceTypeId;
  DeviceTitleEn;
  DeviceTitle;
  DeviceIP;
  DevicePort;
  SizeOfData;
  DataUnit;
  StartAddress;
  DeviceNoInIP;
  IsActive;
  IsActiveName;
  setAddress;
  getAddress;
  constructor(element) {
    this.DeviceId = element?.DeviceId;
    this.PhaseNo = element?.PhaseNo;
    this.DeviceTypeId = element?.DeviceTypeId;
    this.DeviceTitleEn = element?.DeviceTitleEn;
    this.DeviceTitle = element?.DeviceTitle;
    this.DeviceIP = element?.DeviceIP;
    this.DevicePort = element?.DevicePort;
    this.SizeOfData = element?.SizeOfData;
    this.DataUnit = element?.DataUnit;
    this.StartAddress = element?.StartAddress;
    this.DeviceNoInIP = element?.DeviceNoInIP;
    this.IsActive = element?.IsActive;
    this.IsActive = element.IsActive ? 'Yes' : 'No';
    this.setAddress = element?.setAddress;
    this.getAddress = element?.getAddress;
  }
}
