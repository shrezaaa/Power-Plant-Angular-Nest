import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UnitService } from '../../../shared/services/unit.service';

@Component({
  selector: 'p-plant-inv-data-analysis',
  templateUrl: './inv-data-analysis.component.html',
  styleUrls: ['./inv-data-analysis.component.scss'],
})
export class InvDataAnalysisComponent implements OnInit, OnChanges {
  @Input('deviceTypeID') deviceTypeID = null;
  @Input('deviceID') deviceID = null;
  loading = false;
  filterForm = this.fb.group({
    DateTime: '2021-12-09',
    isNormalized: false,
  });
  constructor(
    private readonly fb: FormBuilder,
    private unitService: UnitService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.deviceID && changes.deviceID.currentValue) {
      this.getData();
    }
  }

  ngOnInit(): void {}

  getData() {
    const { DateTime } = this.filterForm.value;
    this.loading = true;
    this.unitService
      .getInvAnalysisData({
        DateTime: new Date(DateTime).toLocaleDateString(),
        DeviceID: this.deviceID,
      })
      .subscribe({
        next: (res) => {
          console.log(res);
          this.loading = false;
        },
        error: (err) => {
          this.loading = false;
        },
      });
  }
}
