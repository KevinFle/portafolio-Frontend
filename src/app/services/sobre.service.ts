import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sobre } from '../modelo/sobre';

@Injectable({
  providedIn: 'root'
})
export class SobreService {

  
  constructor(private http: HttpClient) { }
  Url='http://localhost:8080/sobre';

  getSobre(){
    return this.http.get<Sobre[]>(this.Url);
  }
  
  createSobre(sobre:Sobre){
    return this.http.post<Sobre>(this.Url+"/agregar",sobre);
  }

  getSobreId(id:number){
    return this.http.get<Sobre>(this.Url+"/"+id);
  }
  updateSobre(sobre:Sobre){
    return this.http.put<Sobre>(this.Url+"/"+sobre.id,sobre);
  }

  deleteSobre(sobre:Sobre){
    return this.http.delete<Sobre>(this.Url+"/"+sobre.id);
  }
}
