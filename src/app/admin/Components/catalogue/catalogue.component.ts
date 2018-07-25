import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { CatalogueListService } from '../../../catalogue/services/cataloglistservice';
import { CatalogueList } from '../../../catalogue/Interfaces/cataloguelist';
import { EditCatalogueComponent } from '../../Components/edit-catalogue/edit-catalogue.component';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  displayedColumns = ['id', 'type', 'image' , 'Delete'];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private catalogue: CatalogueListService, public dialog: MatDialog) {
    this.catalogue.getCatalogueList().subscribe(x => {
      this.dataSource = new MatTableDataSource<CatalogueList>(x);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
   }

  ngOnInit() {
  }

  addCatalogue(): void {
    const dialogRef = this.dialog.open(EditCatalogueComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.catalogue.getCatalogueList().subscribe(x => {
        this.dataSource = new MatTableDataSource<CatalogueList>(x);
        this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
      });
    });

  }

  deleteCatalogue(catalogue) {
      this.catalogue.deleteCatalogueList(catalogue).subscribe((res) => {
        this.catalogue.getCatalogueList().subscribe(x => {
          this.dataSource = new MatTableDataSource<CatalogueList>(x);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      });
  }

}
