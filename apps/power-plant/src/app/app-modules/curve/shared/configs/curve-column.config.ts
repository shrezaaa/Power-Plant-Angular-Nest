import { curveColumnItem } from '../interfaces/curve-column.interface';

export const SharedCurveColumns: Array<curveColumnItem> = [];

export const CombinerCurveColumns: Array<curveColumnItem> = [];

export const InverterCurveColumns: Array<curveColumnItem> = [
  { name: 'VoltageAB', column: 'VoltageAB' },
  { name: 'VoltageBC', column: 'VoltageBC' },
  { name: 'VoltageCA', column: 'VoltageCA' },
  { name: 'CurrentA', column: 'CurrentA' },
  { name: 'CurrentB', column: 'CurrentB' },
  { name: 'CurrentC', column: 'CurrentC' },
  { name: 'Frequency', column: 'Frequency' },
  { name: 'PowerFactorA', column: 'PowerFactorA' },
  { name: 'PowerFactorB', column: 'PowerFactorB' },
  { name: 'PowerFactorC', column: 'PowerFactorC' },
  { name: 'ActivePowerA', column: 'ActivePowerA' },
  { name: 'ActivePowerB', column: 'ActivePowerB' },
  { name: 'ActivePowerC', column: 'ActivePowerC' },
  { name: 'ReActivePowerA', column: 'ReActivePowerA' },
  { name: 'ReActivePowerB', column: 'ReActivePowerB' },
  { name: 'ReActivePowerC', column: 'ReActivePowerC' },
  { name: 'PVVoltage', column: 'PVVoltage' },
  { name: 'PVCurrent', column: 'PVCurrent' },
  { name: 'PVPower', column: 'PVPower' },
  { name: 'DayPower', column: 'DayPower' },
  { name: 'InvEfficiency', column: 'InvEfficiency' },
  { name: 'YearPower', column: 'YearPower' },
  { name: 'Temperature', column: 'Temperature' },
];

export const WampCurveColumns: Array<curveColumnItem> = [];
