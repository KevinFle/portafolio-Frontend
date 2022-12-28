import { Injectable } from '@angular/core';
import { Skills } from '../modelo/skills';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  
  constructor(private http: HttpClient) { }
  Url='http://localhost:8080/skills';

  getSkills(){
    return this.http.get<Skills[]>(this.Url);
  }
  
  createSkills(skills:Skills){
    return this.http.post<Skills>(this.Url+"/agregar",skills);
  }

  getSkillsId(id:number){
    return this.http.get<Skills>(this.Url+"/"+id);
  }
  updateSkills(skills:Skills){
    return this.http.put<Skills>(this.Url+"/"+skills.id,skills);
  }

  deleteSkills(skills:Skills){
    return this.http.delete<Skills>(this.Url+"/"+skills.id);
  }
}
