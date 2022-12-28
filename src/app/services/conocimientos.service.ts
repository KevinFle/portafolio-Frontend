import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conocimientos } from 'src/app/modelo/conocimientos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConocimientosService {

  constructor(private http: HttpClient) { }
  Url='http://localhost:8080/conocimientos';

  getConocimientos(){
    return this.http.get<Conocimientos[]>(this.Url);
  }
  
  createConocimientos(conocimientos:Conocimientos){
    return this.http.post<Conocimientos>(this.Url+"/agregar",conocimientos);
  }

  getConocimientosId(id:number){
    return this.http.get<Conocimientos>(this.Url+"/"+id);
  }
  updateConocimientos(conocimientos:Conocimientos){
    return this.http.put<Conocimientos>(this.Url+"/"+conocimientos.id,conocimientos);
  }

  deleteConocimientos(conocimientos:Conocimientos){
    return this.http.delete<Conocimientos>(this.Url+"/"+conocimientos.id);
  }
}
