export class Unit {
  DeviceId;
  PhaseNo;
  DeviceTypeId;
  DeviceTitle;
  DeviceIP;
  DevicePort;
  SizeOfData;
  DataUnit;
  StartAddress;
  DeviceNoInIP;
  IsActive;
  setAddress;
  getAddress;
  constructor(element) {
    this.DeviceId = element?.DeviceId;
    this.PhaseNo = element?.PhaseNo;
    this.DeviceTypeId = element?.DeviceTypeId;
    this.DeviceTitle = element?.DeviceTitle;
    this.DeviceIP = element?.DeviceIP;
    this.DevicePort = element?.DevicePort;
    this.SizeOfData = element?.SizeOfData;
    this.DataUnit = element?.DataUnit;
    this.StartAddress = element?.StartAddress;
    this.DeviceNoInIP = element?.DeviceNoInIP;
    this.IsActive = element?.IsActive;
    this.setAddress = element?.setAddress;
    this.getAddress = element?.getAddress;
  }
}
