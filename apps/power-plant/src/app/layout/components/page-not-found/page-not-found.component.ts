import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'slp-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  goToHome() {
    this.router.navigate(['dashboard']);
  }

  goBack() {
    this.location.back();
  }
}
