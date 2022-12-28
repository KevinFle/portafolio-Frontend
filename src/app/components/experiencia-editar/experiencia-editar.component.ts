import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelo/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencia-editar',
  templateUrl: './experiencia-editar.component.html',
  styleUrls: ['./experiencia-editar.component.css']
})
export class ExperienciaEditarComponent implements OnInit {
  experiencia:Experiencia = new Experiencia();
  constructor(private router:Router, private service:ExperienciaService) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.service.getExperienciaId(+Number(id))
    .subscribe(data=>{
      this.experiencia=data;
    })
  }
  Actualizar(experiencia:Experiencia){
    this.service.updateExperiencia(experiencia)
    .subscribe(data=>{
    this.experiencia=data;
    alert("Se actualizo con Exito");
    this.router.navigate(["/modoEdicion"]);
    })
  }
}
