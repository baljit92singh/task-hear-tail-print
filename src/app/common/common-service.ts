import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    console.log(data);
    return this.http.post('https://touku.angelium.net/api/jwt/api-token-auth/', data)
  }
}
