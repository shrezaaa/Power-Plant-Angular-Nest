import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'p-plant-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
})
export class MainDashboardComponent implements OnInit {
  producePowerModes = [
    { id: 1, name: 'Day' },
    { id: 2, name: 'Month' },
    { id: 3, name: 'Year' },
  ];
  activeProducePowerModeID = 1;

  
  itemsClasses =
    'w-full h-full bg-white bg-gradient-to-r rounded-lg flex flex-col items-center justify-around p-2 shadow-md';

  ngOnInit(): void {}

  changeProducePowerMode(item) {
    this.activeProducePowerModeID = item.id;  
  }
}
