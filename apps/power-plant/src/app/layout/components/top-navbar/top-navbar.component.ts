import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { AlertService } from '../../../core/alert/alert.service';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'p-plant-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss'],
})
export class TopNavbarComponent implements OnInit {
  @Input() isLeftExpanded: boolean = false;
  @Input() isRightExpanded: boolean = false;
  @Output() isLeftExpandedChange = new EventEmitter<boolean>();
  @Output() isRightExpandedChange = new EventEmitter<boolean>();
  pending: boolean = false;
  breadcrump: { url: string; value: string; name: string }[] = [];
  hasProfileImg: boolean = false;
  constructor(
    private router: Router,
    private userService: UserService,
    private alertSrv: AlertService // private dialog: MatDialog,
  ) // private userSrv: UserService,
  // private userPipe: UserInfoPipe,
  // private alertSrv: AlertService
  // private breadcrumbPipe: BreadcrumpPipe
  {}

  getImageUrl(): string {
    // return this.userPipe.transform('', 'profileImage');
    return '';
  }

  ngOnInit(): void {
    // this.pendding = true;
    // this.userSrv.getMyInfo().subscribe(
    //   (res) => {
    //     this.userSrv.getUserFullInfo(res.id, res.role).subscribe(
    //       (res2: any) => {
    //         localStorage.setItem(
    //           'USER_INFO',
    //           JSON.stringify({ ...res, ...res2 })
    //         );
    //         this.pendding = false;
    //       },
    //       (e) => {
    //         localStorage.setItem('USER_INFO', JSON.stringify({ ...res }));
    //         this.pendding = false;
    //       }
    //     );
    //   },
    //   (e) => {
    //     this.pendding = false;
    //   }
    // );
    // this.setBreadCrumps();
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     this.setBreadCrumps();
    //   }
    // });
  }

  private setBreadCrumps() {
    // try {
    //   this.breadcrump = this.breadcrumbPipe.transform([]).map((i) => {
    //     return {
    //       name: i && i.name ? i.name : '',
    //       url: i && i.url ? i.url : '',
    //       value: i && i.value ? i.value : '',
    //     };
    //   });
    // } catch {}
  }

  openAlarams(){
    this.isRightExpandedChange.emit(true)
  }

  onEditProfile(menu: MatMenuTrigger) {
    // menu.closeMenu();
    // this.dialog.open(ProfileDialog);
  }

  onLogout() {
    this.userService.onLogout();
    this.router.navigate(['auth/login']);
    this.alertSrv.showToaster('You logged out Successfully!', 'INFO');
    // this.router.navigate(['/auth/login']);
  }
}
