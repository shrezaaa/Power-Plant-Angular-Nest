import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@power-plant-angular-nest/api-interfaces';

@Component({
  selector: 'power-plant-angular-nest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // hello$ = this.http.get<Message>('/api/hello');
  constructor() {}
}
