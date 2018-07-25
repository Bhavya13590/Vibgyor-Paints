import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Address } from '../../shared/services/address';
import { environment } from '../../../environments/environment';


@Injectable()
export class StoresService {

    private StoresUrl = `${environment.apiEndPoint}/api/stores`;

    constructor(
        private http: HttpClient) { }

        getStores (): Observable<Address[]> {
            return this.http.get<Address[]>(this.StoresUrl);
          }

        postStores(store) {
            return this.http.post(this.StoresUrl, store);
        }

        updateStores(store) {
            return this.http.put(`${environment.apiEndPoint}/api/stores/${store.id}` , store);
        }

        deleteStores(store) {
            return this.http.delete(`${environment.apiEndPoint}/api/stores/${store.id}`);
        }



}



