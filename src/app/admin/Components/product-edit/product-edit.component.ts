import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CatalogueListService } from '../../../catalogue/services/cataloglistservice';
import { Validators } from '@angular/forms';
import { ProductList } from '../../../catalogue/Interfaces/ProductList';
import { ProductService } from '../../../catalogue/services/productservice';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productEdit: FormGroup;
  catalogue;
  catTypeControl: FormControl;
  imageControl: FormControl;
  nameControl: FormControl;
  priceControl: FormControl;
  descControl: FormControl;
  moreControl: FormControl;
  catType;
  image;
  name;
  price;
  description;
  moreInfo;
  productList = new ProductList();
  editedProductList = new ProductList();

  constructor(public dialogRef: MatDialogRef<ProductEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private catService: CatalogueListService, private builder: FormBuilder,
  private prodService: ProductService) {
      this.productList = data.details ;
      this.catService.getCatalogueList().subscribe(x => {
            this.catalogue = x.map(y => y.type);
      });

      this.catTypeControl = new FormControl('', Validators.required);
      this.imageControl = new FormControl('', Validators.required);
      this.nameControl = new FormControl('', Validators.required);
      this.priceControl = new FormControl('', Validators.required);
      this.descControl = new FormControl('', Validators.required);
      this.moreControl = new FormControl('', Validators.required);

      this.productEdit = this.builder.group({
        'catType': this.catTypeControl,
        'image': this.imageControl,
        'name': this.nameControl,
        'price': this.priceControl,
        'description': this.descControl,
        'moreInfo': this.moreControl
     });

    }

  ngOnInit() {
    this.catTypeControl
    .valueChanges
    .subscribe (value => {
      this.catType = value;
    });

    this.imageControl
    .valueChanges
    .subscribe (value => {
      this.image = value;
    });

    this.nameControl
    .valueChanges
    .subscribe (value => {
      this.name = value;
    });

    this.priceControl
    .valueChanges
    .subscribe (value => {
      this.price = value;
    });

    this.descControl
    .valueChanges
    .subscribe (value => {
      this.description = value;
    });

    this.moreControl
    .valueChanges
    .subscribe (value => {
      this.moreInfo = value;
    });

if (this.productList != null) {
    this.catTypeControl.setValue(this.productList.type);
    this.imageControl.setValue(this.productList.image);
   this.nameControl.setValue(this.productList.name);
   this.priceControl.setValue(this.productList.price);
   this.descControl.setValue(this.productList.description);
   this.moreControl.setValue(this.productList.moreInfo);
}
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveChanges() {
    if (this.productList === null) {
      this.editedProductList.type = this.catType;
      this.editedProductList.image = this.image;
      this.editedProductList.name = this.name;
      this.editedProductList.price = this.price;
      this.editedProductList.description = this.description;
      this.editedProductList.moreInfo = this.moreInfo;
      this.prodService.postProductList(this.editedProductList).subscribe((res) => {
        console.log(res);
      });
      this.dialogRef.close();

    } else {

      this.editedProductList.id = this.productList.id;
      this.editedProductList.type = this.catType;
      this.editedProductList.image = this.image;
      this.editedProductList.name = this.name;
      this.editedProductList.price = this.price;
      this.editedProductList.description = this.description;
      this.editedProductList.moreInfo = this.moreInfo;
      this.prodService.putProductList(this.editedProductList).subscribe((res) => {
        console.log(res);
      });
      this.dialogRef.close();
    }
  }
}


