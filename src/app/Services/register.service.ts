import { Injectable } from '@angular/core';
import { environment } from '../Environment/environment';
import { HttpClient } from '@angular/common/http';
import { userDto } from '../Models/Dtos/UserDto/userDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl: string = environment.apiLocal + '/users';

  constructor(private httpClient: HttpClient) { }

  registerUser(user: userDto): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/insert`, user); 
  }
}
