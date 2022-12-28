import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/modelo/estudios';
import { EstudiosService } from 'src/app/services/estudios.service';

@Component({
  selector: 'app-educacion-editar',
  templateUrl: './educacion-editar.component.html',
  styleUrls: ['./educacion-editar.component.css']
})
export class EducacionEditarComponent implements OnInit {
  estudios: Estudios = new Estudios();
  constructor(private router:Router, private service:EstudiosService) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.service.getEstudiosId(+Number(id))
    .subscribe(data=>{
      this.estudios=data;
    })
  }
  Actualizar(estudios:Estudios){
    this.service.updateEstudios(estudios)
    .subscribe(data=>{
    this.estudios=data;
    alert("Se actualizo con Exito");
    this.router.navigate(["/modoEdicion"]);
    })
  }
}
