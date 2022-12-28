import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SobreService } from 'src/app/services/sobre.service';
import { Sobre } from 'src/app/modelo/sobre';

@Component({
  selector: 'app-sobre-editar',
  templateUrl: './sobre-editar.component.html',
  styleUrls: ['./sobre-editar.component.css']
})
export class SobreEditarComponent implements OnInit {
  sobre:Sobre = new Sobre();
  constructor(private router:Router, private service:SobreService) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.service.getSobreId(+Number(id))
    .subscribe(data=>{
      this.sobre=data;
    })
  }
  Actualizar(sobre:Sobre){
    this.service.updateSobre(sobre)
    .subscribe(data=>{
    this.sobre=data;
    alert("Se actualizo con Exito");
    this.router.navigate(["/modoEdicion"]);
    })
}
}