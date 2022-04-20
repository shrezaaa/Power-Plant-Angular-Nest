import { Component, OnInit } from '@angular/core';
import { BaseHttp } from '../../core/services/base-http.service';

@Component({
  selector: 'p-plant-dashboard-routing',
  templateUrl: './dashboard-routing.component.html',
  styleUrls: ['./dashboard-routing.component.scss'],
})
export class DashboardRoutingComponent implements OnInit {
  constructor(private baseHttp: BaseHttp) {}

  ngOnInit(): void {
    this.baseHttp
      .request('GET', 'hello')
      .setLoading(true)
      .send()
      .subscribe((value) => {
        console.log(value);
      });
  }
}