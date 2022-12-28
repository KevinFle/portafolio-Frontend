import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/modelo/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectos-agregar',
  templateUrl: './proyectos-agregar.component.html',
  styleUrls: ['./proyectos-agregar.component.css']
})
export class ProyectosAgregarComponent implements OnInit {
  proyecto:Proyectos = new Proyectos();
  constructor(private router:Router, private service:ProyectosService) { }

  ngOnInit(): void {
  }
  Guardar(){
    this.service.createProyectos(this.proyecto)
    .subscribe(data=>{
      alert("El proyecto se agregó con exito");
      this.router.navigate(["/modoEdicion"]);
    })
}
}
