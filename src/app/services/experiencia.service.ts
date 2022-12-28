import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experiencia } from '../modelo/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http: HttpClient) { }
  Url='http://localhost:8080/experiencia';

  getExperiencia(){
    return this.http.get<Experiencia[]>(this.Url);
  }
  
  createExperiencia(experiencia:Experiencia){
    return this.http.post<Experiencia>(this.Url+"/agregar",experiencia);
  }

  getExperienciaId(id:number){
    return this.http.get<Experiencia>(this.Url+"/"+id);
  }
  updateExperiencia(experiencia:Experiencia){
    return this.http.put<Experiencia>(this.Url+"/"+experiencia.id,experiencia);
  }

  deleteExperiencia(experiencia:Experiencia){
    return this.http.delete<Experiencia>(this.Url+"/"+experiencia.id);
  }
}
