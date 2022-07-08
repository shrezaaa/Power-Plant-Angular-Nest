import { FunctionCall, FunctionExpr } from "@angular/compiler";
import { Component, Input, OnInit } from "@angular/core";
import { UnaryFunction } from "rxjs";

@Component({
  selector: "app-detail-section",
  templateUrl: "./detail-section.component.html",
  styleUrls: ["./detail-section.component.scss"],
})
export class DetailSectionComponent implements OnInit {
  @Input("data") data: Array<NameValueDetailSection> = [];
  @Input("headerTitle") headerTitle = "";
  constructor() {}

  ngOnInit(): void {}

  getTypeHref(type, value):string {
    switch (type) {
      case "email":
        return `mailto: ${value}`;
      case "phone":
        return `tel:${value}`;
      default:
        return `#`;
    }
  }
}

export interface NameValueDetailSection {
  name: string;
  value: string;
  class?: string; //should be bootstrap class or globaly class name
  onClick?: any; // you can use with this structure: (($event) => {})
  type?: "email" | "phone";
}
