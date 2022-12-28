import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/modelo/proyectos';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProyectosService } from 'src/app/services/proyectos.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectoss!: Proyectos[];
  constructor(private service: ProyectosService , private router: Router) { }

  ngOnInit(): void {
    this.service.getProyectos()
    .subscribe(data=>{
      this.proyectoss=data;
  })
}

Editar(proyectos:Proyectos):void{
  localStorage.setItem("id",proyectos.id.toString());
  this.router.navigate(["editarProyecto"]);
}

Delete(proyectos:Proyectos){
  this.service.deleteProyectos(proyectos)
  .subscribe(data=>{
    this.proyectoss=this.proyectoss.filter(p=>p!==proyectos);
    alert("Proyecto eliminado...");
  })
}
Nuevo(){
this.router.navigate(['proyectoAgregar']);
}

hasRoute(route: string)
{
return this.router.url == route
}
}
