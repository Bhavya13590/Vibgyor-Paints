import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ProductList } from '../../catalogue/Interfaces/ProductList';
import { ProductService } from '../../catalogue/services/productservice';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchControlTest: FormControl;
  searchText: string;
  testForm: FormGroup;
  filteredOptions: ProductList[];
  uniqueProductNames: string[] = [];
  products: ProductList[] = [];
  searchedProducts: ProductList[] = [];

  constructor(private productService: ProductService, private router: Router,
    private formBuilder: FormBuilder) {
    this.searchControlTest = new FormControl('');
    this.testForm = formBuilder.group({
      'searchControl': this.searchControlTest
    });
    this.productService.getProductList().subscribe(res => this.products = res);
  }

  ngOnInit() {

    this.searchControlTest.valueChanges
    .map(value => value.trim())
    .filter(value => !!value)
    .debounceTime(400)
    .subscribe((value: string) => {
      this.searchText = value;
      this.uniqueProductNames = Array.from(new Set(this.products.map(x => x.name)
          .filter(item => item.toLowerCase().includes(value.toLowerCase()))));
    });
  }

  search() {
    if (this.searchText != null && this.searchText !== '') {
      this.router.navigate(['product'], { queryParams: { data: this.searchText } });
    }
  }

}
