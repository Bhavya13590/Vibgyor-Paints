import { Component, OnInit } from '@angular/core';
import { StoresService } from '../../../home/Services/storesservice';
import { MatDialog, MatPaginator, MatSort } from '@angular/material';
import { EditStoresComponent } from '../edit-stores/edit-stores.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrls: ['./stores-list.component.css']
})
export class StoresListComponent implements OnInit {

  displayedColumns = ['id', 'flatNo', 'street', 'state', 'city', 'pin', 'Edit', 'Delete'];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private storeService: StoresService, public dialog: MatDialog) {
    this.storeService.getStores().subscribe(x => {
      this.dataSource = x;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
   }

  ngOnInit() {
  }

  openEditPage(store): void {
    const dialogRef = this.dialog.open(EditStoresComponent, {
      width: '450px',
      data: { details: store }
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.storeService.getStores().subscribe(x => {this.dataSource = x;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }

  addStore(): void {
    const dialogRef = this.dialog.open(EditStoresComponent, {
      width: '450px',
      data: { details: null }
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.storeService.getStores().subscribe(x => {this.dataSource = x;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort; });
    });
  }

  deleteStore(store) {
    this.storeService.deleteStores(store).subscribe(x => {
      this.storeService.getStores().subscribe(y => {this.dataSource = y;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }
}
