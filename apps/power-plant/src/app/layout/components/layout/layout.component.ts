import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'power-plant-angular-nest-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isExpanded = true;
  constructor() {}
  ngOnInit(): void {
    this.isExpanded = localStorage.getItem('FOLDED') == 'true' ? true : false;
  }

  logger() {
    localStorage.setItem('FOLDED', this.isExpanded.toString());
  }
}
