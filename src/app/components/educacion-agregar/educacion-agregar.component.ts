import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/modelo/estudios';
import { EstudiosService } from 'src/app/services/estudios.service';

@Component({
  selector: 'app-educacion-agregar',
  templateUrl: './educacion-agregar.component.html',
  styleUrls: ['./educacion-agregar.component.css']
})
export class EducacionAgregarComponent implements OnInit {
  estudios:Estudios = new Estudios();
  constructor( private service:EstudiosService, private router:Router) { }

  ngOnInit(): void {
  }
  Guardar(){
    this.service.createEstudios(this.estudios)
    .subscribe(data=>{
      alert("El estudio se agregó con exito");
      this.router.navigate(["/modoEdicion"]);
    })
}
}