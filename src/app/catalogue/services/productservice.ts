import { HttpClient, HttpHeaders } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable, Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { ProductList } from '../Interfaces/ProductList';
import { environment } from '../../../environments/environment';


@Injectable()
export class ProductService {
    productList: ProductList;

    pListSource = new Subject<ProductList>();
    pList = this.pListSource.asObservable();


    private ProductUrl = `${environment.apiEndPoint}/api/paintproducts`;

    constructor(
        private http: HttpClient) { }

    getProductList(): Observable<ProductList[]> {
        return this.http.get<ProductList[]>(this.ProductUrl);
    }

    getProductListOnReq(start, end): Observable<ProductList[]> {
        return this.http.get<ProductList[]>(`${environment.apiEndPoint}/api/paintproducts?_start=${start}&_end=${end}`);
    }

    getProductListofId(id): Observable<ProductList[]> {
        return this.http.get<ProductList[]>(`${environment.apiEndPoint}/api/paintproducts?id=${id}`);
    }

    setProductDetailsToShare(details: ProductList) {
        this.pListSource.next(details);
    }

    postProductList(product) {
            return this.http.post(this.ProductUrl, product);
    }

    putProductList(product) {
        return this.http.put(`${environment.apiEndPoint}/api/paintproducts/${product.id}`, product);
    }

    deleteProductList(product) {
        return this.http.delete(`${environment.apiEndPoint}/api/paintproducts/${product.id}`);
    }

    getProductsOnSearch(val: string): Observable<ProductList[]> {
        return this.http.get<ProductList[]>(`${environment.apiEndPoint}/api/paintproducts?name_like=${val}`);
      }

}



