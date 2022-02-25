import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'p-plant-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
  itemClasses='w-full h-full bg-white bg-gradient-to-r rounded-lg flex flex-col items-center justify-around p-2 pt-14 shadow-md'
  constructor() { }

  ngOnInit(): void {
  }

}
