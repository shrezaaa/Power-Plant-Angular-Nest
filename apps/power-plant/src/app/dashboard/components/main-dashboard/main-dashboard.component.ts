import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'p-plant-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
})
export class MainDashboardComponent implements OnInit {
  itemsClasses =
    'w-full h-full bg-white bg-gradient-to-r rounded-lg flex flex-col items-center justify-around p-2 shadow-md';
  ngOnInit(): void {}
}
