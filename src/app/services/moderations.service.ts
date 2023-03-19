import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ModerationsService {

  constructor(private http: HttpClient) { }
  apiURL = 'https://api.openai.com/v1/moderations';

  //Http Options
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + process.env['NG_APP_KEY'],
    })
  }

  postCompletition(payload : any) : Observable<any> {
    return this.http.post<any>(this.apiURL, JSON.stringify(payload), this.httpOptions)
    .pipe(
      retry(1)
    )
  }
}