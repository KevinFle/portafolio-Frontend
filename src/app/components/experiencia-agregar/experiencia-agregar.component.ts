import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/app/modelo/experiencia';
@Component({
  selector: 'app-experiencia-agregar',
  templateUrl: './experiencia-agregar.component.html',
  styleUrls: ['./experiencia-agregar.component.css']
})
export class ExperienciaAgregarComponent implements OnInit {
  experiencia:Experiencia = new Experiencia();
  constructor(private router:Router, private service:ExperienciaService) { }

  ngOnInit(): void {
  }
  Guardar(){
    this.service.createExperiencia(this.experiencia)
    .subscribe(data=>{
      alert("La experiencia se agregó con exito");
      this.router.navigate(["/modoEdicion"]);
    })
}
}
