import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BookConsultant } from '../Interfaces/bookConsultant';
import { environment } from '../../../environments/environment';

@Injectable()
export class BookAConsultantService {

    private BookConsultantUrl = `${environment.apiEndPoint}/api/bookConsultant`;

    constructor(
        private http: HttpClient) { }


          bookAConsultant (bookDetails) {
            const ParseHeaders = {
              headers: new HttpHeaders({
                'Content-Type': 'application/json'
              })
            };

            return this.http.post(this.BookConsultantUrl, bookDetails, ParseHeaders).subscribe((res) => {
              console.log(res);
           });
          }

}



