import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/modelo/estudios';
import { EstudiosService } from 'src/app/services/estudios.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  estudioss!: Estudios[];
  constructor(private service: EstudiosService, private router: Router) { }

  ngOnInit(): void {
    this.service.getEstudios()
    .subscribe(data=>{
      this.estudioss=data;
  })

}
Editar(estudios:Estudios):void{
  localStorage.setItem("id",estudios.id.toString());
  this.router.navigate(["editarEstudios"]);
}

Delete(estudios:Estudios){
  this.service.deleteEstudios(estudios)
  .subscribe(data=>{
    this.estudioss=this.estudioss.filter(p=>p!==estudios);
    alert("Estudio eliminado...");
  })
}
Nuevo(){
this.router.navigate(['estudiosAgregar']);
}

hasRoute(route: string)
{
return this.router.url == route
}
}
