import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelo/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciass!:Experiencia[];
  constructor(private service:ExperienciaService,
    private router: Router) { }

  ngOnInit(): void {
    this.service.getExperiencia()
    .subscribe(data=>{
      this.experienciass=data;
  })
  }
  Editar(experiencia:Experiencia):void{
    localStorage.setItem("id",experiencia.id.toString());
    this.router.navigate(["editarExperiencia"]);
  }
  
  Delete(experiencia:Experiencia){
    this.service.deleteExperiencia(experiencia)
    .subscribe(data=>{
      this.experienciass=this.experienciass.filter(p=>p!==experiencia);
      alert("Experiencia eliminado...");
    })
  }
  
  hasRoute(route: string)
  {
  return this.router.url == route
  }
  Nuevo(){
    this.router.navigate(['agregarExperiencia']);
  }

}
