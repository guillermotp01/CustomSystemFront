import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../Environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl: string = environment.apiLocal + '/login';

  constructor(private httpClient: HttpClient) { }

  loginWeb(data: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, data, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
