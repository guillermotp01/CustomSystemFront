import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../Environment/environment';
import { catchError, Observable, throwError, timeout } from 'rxjs';

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

  getAuthToken(): string | null {
    if (typeof window !== 'undefined') {  // Verifica si estamos en el navegador
      return localStorage.getItem('token');
    }
    return null;
  }
  
  

}
