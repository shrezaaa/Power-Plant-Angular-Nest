import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { PlantModel } from '../../../app-modules/plants/shared/models/plant.model';
import { AlertService } from '../../../core/alert/alert.service';
import { UserService } from '../../../core/services/user.service';
import { PlantSelectDialogComponent } from '../plant-select-dialog/plant-select-dialog.component';

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
  hasProfileImg: boolean = false;

  selectedPlant:Partial<PlantModel>={
    PlantID:null,PlantName:'All'
  }
  constructor(
    private router: Router,
    public userService: UserService,
    private alertSrv: AlertService,
    private dialog: MatDialog
  ) {}

  getImageUrl(): string {
    return '';
  }

  ngOnInit(): void {}

  onSelectPlant() {
    let dialogRef = this.dialog.open(PlantSelectDialogComponent, {
      minWidth: '50vw',
      width:'50vw',
      height:'50vh',
      minHeight: '50vh',
    });
    dialogRef.afterClosed().subscribe((value:Partial<PlantModel>)=>{
      if(value){
            this.onChangePlant(value)
      }
    })
  }

  onChangePlant(value){
    this.selectedPlant=value
  }

  openAlarms() {
    this.isRightExpandedChange.emit(true);
  }

  onEditProfile(menu: MatMenuTrigger) {
    // menu.closeMenu();
    // this.dialog.open(ProfileDialog);
  }

  onLogout() {
    this.userService.onLogout();
    this.router.navigate(['auth/login']);
    this.alertSrv.showToaster('You logged out Successfully!', 'INFO');
  }
}
