import { Injectable } from '@angular/core';
import { Estudios } from '../modelo/estudios';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  constructor(private http: HttpClient) { }
  Url='http://localhost:8080/estudios';

  getEstudios(){
    return this.http.get<Estudios[]>(this.Url);
  }
  
  createEstudios(estudios:Estudios){
    return this.http.post<Estudios>(this.Url+"/agregar",estudios);
  }

  getEstudiosId(id:number){
    return this.http.get<Estudios>(this.Url+"/"+id);
  }
  updateEstudios(estudios:Estudios){
    return this.http.put<Estudios>(this.Url+"/"+estudios.id,estudios);
  }

  deleteEstudios(estudios:Estudios){
    return this.http.delete<Estudios>(this.Url+"/"+estudios.id);
  }
}
