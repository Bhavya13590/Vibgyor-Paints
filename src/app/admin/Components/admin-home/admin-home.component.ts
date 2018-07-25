import { StoresService } from '../../../home/Services/storesservice';
import { ProductService } from '../../../catalogue/services/productservice';
import { CatalogueListService } from './../../../catalogue/services/cataloglistservice';
import { UserAuthService } from '../../../auth/Services/user.auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  userCount: number;
  catalogCount: number;
  productCount: number;
  storeCount: number;

  constructor(private userService: UserAuthService, private catalogService: CatalogueListService,
  private productService: ProductService, private storeService: StoresService) { }

  ngOnInit() {
    this.userService.getUserFromApi().subscribe(
      users => this.userCount = users.length || 0
    );

    this.catalogService.getCatalogueList().subscribe(
      catalogs => this.catalogCount = catalogs.length || 0
    );

    this.productService.getProductList().subscribe(
      products => this.productCount = products.length || 0
    );

    this.storeService.getStores().subscribe(
      stores => this.storeCount = stores.length || 0
    );
  }

}
