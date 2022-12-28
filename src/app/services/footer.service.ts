import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Footer } from '../modelo/footer';
@Injectable({
  providedIn: 'root'
})
export class FooterService {

  
  constructor(private http: HttpClient) { }
  Url='http://localhost:8080/footer';

  getFooter(){
    return this.http.get<Footer[]>(this.Url);
  }
  
  createFooter(footer:Footer){
    return this.http.post<Footer>(this.Url+"/agregar",footer);
  }

  getFooterId(id:number){
    return this.http.get<Footer>(this.Url+"/"+id);
  }
  updateFooter(footer:Footer){
    return this.http.put<Footer>(this.Url+"/"+footer.id,footer);
  }

  deleteFooter(footer: Footer){
    return this.http.delete<Footer>(this.Url+"/"+footer.id);
  }
}
