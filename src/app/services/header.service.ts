import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 
import { Header } from '../modelo/header';
@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient) { }
  Url='http://localhost:8080/header';

  getHeader(){
    return this.http.get<Header[]>(this.Url);
  }
  
  createHeader(header:Header){
    return this.http.post<Header>(this.Url+"/agregar",header);
  }

  getHeaderId(id:number){
    return this.http.get<Header>(this.Url+"/"+id);
  }
  updateHeader(header:Header){
    return this.http.put<Header>(this.Url+"/"+header.id,header);
  }

  deleteHeader(header:Header){
    return this.http.delete<Header>(this.Url+"/"+header.id);
  }
}
