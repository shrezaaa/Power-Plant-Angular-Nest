import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'p-plant-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss'],
})
export class TopNavbarComponent implements OnInit {
  @Input() isExpanded: boolean = false;
  @Output() isExpandedChange = new EventEmitter<boolean>();
  pendding: boolean = false;
  breadcrump: { url: string; value: string; name: string }[] = [];
  hasProfileImg: boolean = true;
  constructor(private router: Router) // private dialog: MatDialog,
  // private userSrv: UserService,
  // private userPipe: UserInfoPipe,
  // private alertSrv: AlertService,
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

  onEditProfile(menu: MatMenuTrigger) {
    // menu.closeMenu();
    // this.dialog.open(ProfileDialog);
  }

  navigateToAnnouncements() {
    // let access = this.router.url.split('/')[1];
    // if (!['manager', 'student', 'teacher'].includes(access)) access = 'student';
    // this.router.navigate(['', access, 'announcement-list']);
  }

  onLogout() {
    // localStorage.clear();
    // this.alertSrv.showToaster('You loged out Successfully!', 'INFO');
    // this.router.navigate(['/auth/login']);
  }
}
