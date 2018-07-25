import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../catalogue/services/productservice';
import { MatTableDataSource, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { ProductList } from '../../../catalogue/Interfaces/ProductList';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  displayedColumns = ['id', 'type', 'image', 'name', 'price', 'description', 'moreInfo', 'Edit', 'Delete'];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private productService: ProductService, public dialog: MatDialog) {
    this.productService.getProductList().subscribe(x => {
      this.dataSource = new MatTableDataSource<ProductList>(x);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
   }

  ngOnInit() {


  }

  openEditPage(row): void {
    const dialogRef = this.dialog.open(ProductEditComponent, {
      width: '450px',
      data: { details: row }
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.productService.getProductList().subscribe(x => {
        this.dataSource = new MatTableDataSource<ProductList>(x);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }

  addProduct(): void {
    const dialogRef = this.dialog.open(ProductEditComponent, {
      width: '450px',
      data: { details: null }
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.productService.getProductList().subscribe(x => {
        this.dataSource = new MatTableDataSource<ProductList>(x);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }

  deleteProduct(product) {
      this.productService.deleteProductList(product).subscribe((res) => {
        this.productService.getProductList().subscribe(x => {
          this.dataSource = new MatTableDataSource<ProductList>(x);
          this.dataSource.paginator = this.paginator;
        });
      });
  }
}
