import { Injectable } from '@angular/core';
import { Proyectos } from '../modelo/proyectos';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http: HttpClient) { }
  Url='http://localhost:8080/proyectos';

  getProyectos(){
    return this.http.get<Proyectos[]>(this.Url);
  }
  
  createProyectos(proyectos:Proyectos){
    return this.http.post<Proyectos>(this.Url+"/agregar",proyectos);
  }

  getProyectosId(id:number){
    return this.http.get<Proyectos>(this.Url+"/"+id);
  }
  updateProyectos(proyectos:Proyectos){
    return this.http.put<Proyectos>(this.Url+"/"+proyectos.id,proyectos);
  }

  deleteProyectos(proyectos:Proyectos){
    return this.http.delete<Proyectos>(this.Url+"/"+proyectos.id);
  }
}
