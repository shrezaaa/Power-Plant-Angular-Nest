import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  SidenavNode,
  SIDENAV_CONFIG,
} from '../../../core/navigation/sidenav.config';

@Component({
  selector: 'p-plant-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  readonly ACCESS_LIST = ['M', 'S', 'T'];

  data: SidenavNode[] = [];

  @Input() isExpanded: boolean = false;
  @Output() isExpandedChange = new EventEmitter<boolean>();

  constructor() {
    // private tokenDecoder: TokenDecoderPipe
    this.doNavigateOnStorageChange();
    // window.addEventListener(
    //   'storage',
    //   this.doNavigateOnStorageChange.bind(this)
    // );
  }
  ngOnInit() {}

  private doNavigateOnStorageChange() {
    //   let access_type: ACCESS_TYPE = 'S';
    //   if (
    //     this.ACCESS_LIST.includes(this.tokenDecoder.transform('S', 'role') || 'S')
    //   ) {
    //     access_type =
    //       <ACCESS_TYPE>this.tokenDecoder.transform('S', 'role') || 'S';
    //       this.data = SIDENAV_CONFIG.filter((nav) => nav.ACCESS == 'admin');
    //   }
    this.data = SIDENAV_CONFIG;
  }
}
