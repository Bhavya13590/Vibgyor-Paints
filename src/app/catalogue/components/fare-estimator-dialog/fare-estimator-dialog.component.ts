import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-fare-estimator-dialog',
  templateUrl: './fare-estimator-dialog.component.html',
  styleUrls: ['./fare-estimator-dialog.component.css']
})
export class FareEstimatorDialogComponent implements OnInit {
area;
paintPerSqft = 0.2;
priceSelected;
volume = 0;
amount = 0;
  constructor(public dialogRef: MatDialogRef<FareEstimatorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.priceSelected = data.price;
     }

    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit() {
  }

  change() {
    this.volume = this.area * this.paintPerSqft;
    this.amount = this.area * this.paintPerSqft * this.priceSelected;
  }

}
