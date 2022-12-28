import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conocimientos } from 'src/app/modelo/conocimientos';
import { ConocimientosService } from 'src/app/services/conocimientos.service';

@Component({
  selector: 'app-conocimiento-leng-editar',
  templateUrl: './conocimiento-leng-editar.component.html',
  styleUrls: ['./conocimiento-leng-editar.component.css']
})
export class ConocimientoLengEditarComponent implements OnInit {
  conocimientos:Conocimientos = new Conocimientos();
  constructor(private router:Router, private service:ConocimientosService) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.service.getConocimientosId(+Number(id))
    .subscribe(data=>{
      this.conocimientos=data;
    })
  }
  Actualizar(conocimientos:Conocimientos){
    this.service.updateConocimientos(conocimientos)
    .subscribe(data=>{
    this.conocimientos=data;
    alert("Se actualizo con Exito");
    this.router.navigate(["/modoEdicion"]);
    })
  }

}
