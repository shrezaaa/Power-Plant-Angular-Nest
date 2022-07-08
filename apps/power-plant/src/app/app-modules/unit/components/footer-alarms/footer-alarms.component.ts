import { Component, Input, OnInit } from '@angular/core';
import { AlarmModel } from 'apps/power-plant/src/app/dashboard/shared/models/alarm.model';

@Component({
  selector: 'p-plant-footer-alarms',
  templateUrl: './footer-alarms.component.html',
  styleUrls: ['./footer-alarms.component.scss'],
})
export class FooterAlarmsComponent implements OnInit {
  isOpened: boolean = false;
  @Input('data') data: Array<AlarmModel> = [];
  constructor() {}

  ngOnInit(): void {}
}
