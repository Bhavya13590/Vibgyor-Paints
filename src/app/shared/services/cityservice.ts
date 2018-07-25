import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { StateCity } from './StateCity';
import { environment } from '../../../environments/environment';

@Injectable()
export class CityService {

    private StateCityUrl = `${environment.apiEndPoint}/api/City`;

    constructor(
        private http: HttpClient) { }

        getStateCityList (): Observable<StateCity[]> {
            return this.http.get<StateCity[]>(this.StateCityUrl);
          }

          postStateCityList(city) {
              return this.http.post(this.StateCityUrl, city);
          }

          deleteStateCityService(city) {
              return this.http.delete(`${environment.apiEndPoint}/api/City/${city.id}`);
          }

}



