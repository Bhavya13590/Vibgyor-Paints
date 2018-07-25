import { Component, OnInit } from '@angular/core';
import { Cart } from '../../shared/interfaces/CartList';
import { ProductList } from '../../catalogue/Interfaces/ProductList';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../catalogue/services/productservice';
import { Router } from '@angular/router';
import { CartService } from '../../shared/services/cartservice';
import { UserAuthService } from '../../auth/Services/user.auth.service';
import { BadgeService } from '../../shared/services/badge.service';

import { FilterPipe } from '../Pipes/filterpipe';
import { CatalogueListService } from '../../catalogue/services/cataloglistservice';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  catalogueType;
  cartArray = new Cart();
  cartvalue;
  firstEntry = true;
  quantity = 1;
  firtEntry = false;
  errorMessage: string;
  productList: ProductList[] = [];
  productFilter;
  interior;
  exterior;
  filterItems;
  types = [];
  start = 0;
  end = 5;
  searchData: string;
  loading = false;

  constructor(private product: ProductService, private router: Router, private catalogservice: CatalogueListService,
    private cart: CartService, private userauth: UserAuthService, private badge: BadgeService, private route: ActivatedRoute) {

    this.catalogservice.getCatalogueList().subscribe(x => {
      this.filterItems  = Array.from(new  Set( x.map(item  =>  item.type)));
    });

    // this.product.getProductListOnReq(this.start, this.end).subscribe(x => {
    //   this.productList = x;
    // });
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.searchData = params['data'] || '';
        this.loadProducts(this.searchData);
      });

  }

  loadProducts(searchText: string) {

      if (this.searchData !== '') {
        this.loading = true;
        this.product.getProductsOnSearch(this.searchData)
          .subscribe(products => {
            this.productList = products;
           // this.filterItems = Array.from(new Set(products.map(item => item.type)));
            this.loading = false;
          });
      } else {
        this.loading = true;
        this.product.getProductListOnReq(0, this.end)
          .subscribe(products => {
            this.productList = products;
           // this.filterItems = Array.from(new Set(this.productList.map(item => item.type)));
            this.loading = false;
          });
      }

  }

  addProductsToCart(details) {
    this.cartArray.image = details.image;
    this.cartArray.quantity = this.quantity;
    this.cartArray.amount = details.price;
    this.cartArray.name = details.name;
    this.cartArray.prodId = details.id;
    this.cart.addcart(this.cartArray);

  }

  checked(event) {
    if (event.target.checked) {
      this.types.push(event.target.value);
    }  else  {
      const  index  = this.types.indexOf(event.target.value);
      if (index  >  -1) {
        this.types.splice(index, 1);
      }
    }
  }

  onScroll() {
    console.log('scrolled!!');
    this.start = this.end;
    this.end = this.end + 5;
    this.product.getProductListOnReq(this.start, this.end).subscribe(x => {
      // tslint:disable-next-line:prefer-const
      for (let i of x) {
      this.productList.push(i);
      }
    });

  }
}
