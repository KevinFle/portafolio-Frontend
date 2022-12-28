import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { User } from '../modelo/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient: HttpClient) { }

  private baseUrl='http://localhost:8080/login';

loginUser(user: User):Observable<object>{
  
  console.log(user);
  return this.httpClient.post(this.baseUrl, user);
}
}
