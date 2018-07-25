import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Order } from '../Interfaces/order';
import { environment } from '../../../environments/environment';


@Injectable()
export class OrderService {

  private OrdersUrl = `${environment.apiEndPoint}/api/orders`;

  constructor(
    private http: HttpClient) { }

  getOrderDetails(): Observable<Order[]> {
    return this.http.get<Order[]>(this.OrdersUrl);
  }

  getOrderDetailsById(id): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.apiEndPoint}/api/orders?id=${id}`);
  }

  getOrderDetailsByName(name): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.apiEndPoint}/api/orders?name=${name}`);
  }

  postOrders(details): Observable<Order[]> {
    const ParseHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<Order[]>(this.OrdersUrl, JSON.stringify(details), ParseHeaders);
  }



}



