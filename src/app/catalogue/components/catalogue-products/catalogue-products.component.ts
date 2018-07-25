import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ProductService } from '../../services/productservice';
import { ProductList } from '../../Interfaces/ProductList';
import { CartService } from '../../../shared/services/cartservice';
import { Cart } from '../../../shared/interfaces/CartList';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthService } from '../../../auth/Services/user.auth.service';
import { BadgeService } from '../../../shared/services/badge.service';

@Component({
  selector: 'app-catalogue-products',
  templateUrl: './catalogue-products.component.html',
  styleUrls: ['./catalogue-products.component.css']
})
export class CatalogueProductsComponent implements OnInit {
  catalogueType;
  cartArray = new Cart();
  cartvalue;
  firstEntry = true;
  quantity = 1;
  firtEntry = false;
  errorMessage: string;
  productList: ProductList[];
  constructor(private route: ActivatedRoute, private product: ProductService, private router: Router,
    private cart: CartService, private userauth: UserAuthService, private badge: BadgeService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.catalogueType = params['type'];

      this.product.getProductList().subscribe(x => {
        this.productList = x.filter(x1 => x1.type.toLowerCase().includes(this.catalogueType.toLowerCase()));
      });
    });

  }


  shareDetailsToView(details: ProductList) {
    this.router.navigate(['products/view'], { queryParams: { id: details.id } });
  }


  addToCart(details) {
    this.cartArray.image = details.image;
    this.cartArray.quantity = this.quantity;
    this.cartArray.amount = details.price;
    this.cartArray.name = details.name;
    this.cartArray.prodId = details.id;
    this.cart.addcart(this.cartArray);

  }

}
