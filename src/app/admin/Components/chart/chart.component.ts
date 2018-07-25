import { User } from '../../../auth/Interfaces/User';
import { UserAuthService } from '../../../auth/Services/user.auth.service';
import { element } from 'protractor';
import { FilterPipe } from '../../../product/Pipes/filterpipe';
import { ProductList } from '../../../catalogue/Interfaces/ProductList';
import { ProductService } from '../../../catalogue/services/productservice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  products: ProductList[];
  filterPipe = new FilterPipe();
  filterItems = [];

  types: string[] = [];
  chartdata;

  // pie + doughnut
  public pieChartType = 'pie';
  // donutChartData = '[';
  donutChartData = '';
  doughnutChartdetails: number[] = [];
  public doughnutChartType = 'doughnut';

  // CHART COLOR.
  pieChartColor: any = [
    {
      backgroundColor: ['rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        'rgba(139, 136, 136, 0.9)',
        'rgba(255, 161, 181, 0.9)',
        'rgba(255, 102, 0, 0.9)'
      ]
    }
  ];

  // bar chart
  users: User[];
  roles = [];
  barChartdetails: number[] = [];
  barChartType = 'bar';
  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
 // barChartData: ChartData;
  constructor(private productService: ProductService, private userService: UserAuthService) {
    this.productService.getProductList().subscribe(
      products => {
        this.products = products;
        this.filterItems = Array.from(new Set(this.products.map(item => item.type)));
        // tslint:disable-next-line:no-shadowed-variable
        for (const element of this.filterItems) {
          this.types.push(element);
          const filteredArr = this.filterPipe.transform(products, this.types);
          this.doughnutChartdetails.push(filteredArr.length);
          this.types.pop();
        }
      });

    this.userService.getUserFromApi().subscribe(
      users => {
        this.users = users;
        this.roles = ['admin', 'staff', 'user'];
        // tslint:disable-next-line:no-shadowed-variable
        for (const element of this.roles) {
          const filteredArr = this.users.filter(x => x.roles.includes(element));
          let value;

          if (filteredArr === undefined) {
            value = 0;
          } else {
            value = filteredArr.length;
          }
          this.barChartdetails.push(filteredArr.length);
        }
      });
  }

  ngOnInit() {

  }

  // events
  // public doughnutChartClicked(e: MouseEvent): void {
  //   console.log(e);
  // }
  public pieChartClicked(e: any): void {
    console.log(e);
  }

  public barChartClicked(e: any): void {
    console.log(e);
  }

}
