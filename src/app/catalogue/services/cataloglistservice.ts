import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CatalogueList } from '../Interfaces/cataloguelist';
import { environment } from '../../../environments/environment';

@Injectable()
export class CatalogueListService {

    private CatalogueListUrl = `${environment.apiEndPoint}/api/catalogs`;

    constructor(
        private http: HttpClient) { }

        getCatalogueList (): Observable<CatalogueList[]> {
            return this.http.get<CatalogueList[]>(this.CatalogueListUrl);
          }

        postCatalogueList (catalogue) {
           return this.http.post(this.CatalogueListUrl , catalogue);
        }

        deleteCatalogueList (catalogue) {
            return this.http.delete(`${environment.apiEndPoint}/api/catalogs/${catalogue.id}`);
        }



}



