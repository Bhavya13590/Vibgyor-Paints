import { Component, OnInit } from '@angular/core';
import { CityService } from '../../../shared/services/cityservice';
import { StateCity } from '../../../shared/services/StateCity';
import { MatTableDataSource, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { EditcityComponent } from '../editcity/editcity.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  displayedColumns = ['id', 'name', 'state' , 'Delete'];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private cityservice: CityService, public dialog: MatDialog) {
    this.cityservice.getStateCityList().subscribe( x => {
        this.dataSource = new MatTableDataSource<StateCity>(x);
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
    });
   }



  ngOnInit() {
  }

  addCity(): void {
    const dialogRef = this.dialog.open(EditcityComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.cityservice.getStateCityList().subscribe( x => {
        this.dataSource = new MatTableDataSource<StateCity>(x);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      );

    });

  }

  deleteCity(city) {
    this.cityservice.deleteStateCityService(city).subscribe( x => {
      this.cityservice.getStateCityList().subscribe( y => {
        this.dataSource = new MatTableDataSource<StateCity>(y);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      });

    });

  }

}
