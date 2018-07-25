import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProductService } from '../../services/productservice';
import { ProductList } from '../../Interfaces/ProductList';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { FareEstimatorDialogComponent } from '../fare-estimator-dialog/fare-estimator-dialog.component';
import { Cart } from '../../../shared/interfaces/CartList';
import { CartService } from '../../../shared/services/cartservice';
import { UserAuthService } from '../../../auth/Services/user.auth.service';
import { BadgeService } from '../../../shared/services/badge.service';

@Component({
  selector: 'app-catalogue-view',
  templateUrl: './catalogue-view.component.html',
  styleUrls: ['./catalogue-view.component.css']
})
export class CatalogueViewComponent implements OnInit, AfterViewInit {

  id: number;
  productDetail;
  quantity: number;
  login;
 firstEntry = true;
  priceSelected;
  paintPerSqft = 0.2;
  cartArray = new Cart();


  constructor(private service: ProductService, private route: ActivatedRoute, public dialog: MatDialog,
  private cart: CartService, private userauth: UserAuthService, private badge: BadgeService) { }

  ngOnInit() {

 this.route.queryParams.subscribe((params) => {
      this.id = +params['id'];
      this.service.getProductListofId(params['id']).subscribe((x) => {
        this.productDetail = x;
      });
    });

  }

  ngAfterViewInit() {

  }


  openDialog(prod): void {
    const dialogRef = this.dialog.open(FareEstimatorDialogComponent, {
      width: '350px',
      data: { price: prod.price }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  addToCartfromView(details) {
    if ( this.quantity === undefined) {
        alert('Select the Quantity');
    } else {
    this.cartArray.image = details.image;
    this.cartArray.quantity = parseInt(this.quantity.toString() , 35);
    this.cartArray.amount = details.price;
    this.cartArray.name = details.name;
    this.cartArray.prodId = details.id;
    this.cart.addcart(this.cartArray);
    }
  }



}

