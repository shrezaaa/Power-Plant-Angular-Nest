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
  mobileQuery: MediaQueryList;

  constructor(
    private layoutService: LayoutService,
    private media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)'); //md support
  }

  ngOnInit(): void {
    this.isLeftExpanded =
      localStorage.getItem('FOLDED') == 'true' ? true : false;
  }

  saveLeftState() {
    localStorage.setItem('FOLDED', this.isLeftExpanded.toString());
  }

  onOpenedChange(event) {
    if (this.mobileQuery.matches) this.isLeftExpanded = event;
  }
}
