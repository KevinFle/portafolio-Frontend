import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/modelo/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectos-editar',
  templateUrl: './proyectos-editar.component.html',
  styleUrls: ['./proyectos-editar.component.css']
})
export class ProyectosEditarComponent implements OnInit {
  proyecto:Proyectos = new Proyectos();
  constructor(private router:Router, private service:ProyectosService) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.service.getProyectosId(+Number(id))
    .subscribe(data=>{
      this.proyecto=data;
    })
  }
  Actualizar(proyectos:Proyectos){
    this.service.updateProyectos(proyectos)
    .subscribe(data=>{
    this.proyecto=data;
    alert("Se actualizo con Exito");
    this.router.navigate(["/modoEdicion"]);
    })
}

}
