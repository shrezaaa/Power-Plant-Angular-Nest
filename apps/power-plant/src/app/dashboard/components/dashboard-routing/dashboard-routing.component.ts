import { Component, OnInit } from '@angular/core';
import { BaseHttp } from '../../../core/services/base-http.service';

@Component({
  selector: 'p-plant-dashboard-routing',
  templateUrl: './dashboard-routing.component.html',
  styleUrls: ['./dashboard-routing.component.scss'],
})
export class DashboardRoutingComponent implements OnInit {
  constructor(private gsss: BaseHttp) {}

  ngOnInit(): void {
    this.gsss
      .request('GET', 'hello')
      .send()
      .subscribe((value) => {
        console.log(value);
      });
  }
}
