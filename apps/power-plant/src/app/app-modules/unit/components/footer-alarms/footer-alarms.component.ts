import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'p-plant-footer-alarms',
  templateUrl: './footer-alarms.component.html',
  styleUrls: ['./footer-alarms.component.scss'],
})
export class FooterAlarmsComponent implements OnInit {
  isOpened: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
