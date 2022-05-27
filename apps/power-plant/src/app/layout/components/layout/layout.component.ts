import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { BaseHttp } from '../../../core/services/base-http.service';
import { LayoutService } from '../../shared/services/layout.service';

@Component({
  selector: 'power-plant-angular-nest-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isLeftExpanded = true;
  isRightExpanded = false;
  constructor(private layoutService: LayoutService) {}
  ngOnInit(): void {
    this.isLeftExpanded =
      localStorage.getItem('FOLDED') == 'true' ? true : false;
  }

  saveLeftState() {
    localStorage.setItem('FOLDED', this.isLeftExpanded.toString());
  }
}
