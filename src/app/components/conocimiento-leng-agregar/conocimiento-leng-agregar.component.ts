import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conocimientos } from 'src/app/modelo/conocimientos';
import { ConocimientosService } from 'src/app/services/conocimientos.service';

@Component({
  selector: 'app-conocimiento-leng-agregar',
  templateUrl: './conocimiento-leng-agregar.component.html',
  styleUrls: ['./conocimiento-leng-agregar.component.css']
})
export class ConocimientoLengAgregarComponent implements OnInit {
  conocimiento:Conocimientos = new Conocimientos();
  constructor(private router:Router, private service:ConocimientosService) { }

  ngOnInit(): void {
  }
  Guardar(){
    this.service.createConocimientos(this.conocimiento)
    .subscribe(data=>{
      alert("El conocimiento se agregó con exito");
      this.router.navigate(["/modoEdicion"]);
    })
}
}
