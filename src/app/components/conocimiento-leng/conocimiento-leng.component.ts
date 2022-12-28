import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Conocimientos } from 'src/app/modelo/conocimientos';
import { ConocimientosService } from 'src/app/services/conocimientos.service'; 

@Component({
  selector: 'app-conocimiento-leng',
  templateUrl: './conocimiento-leng.component.html',
  styleUrls: ['./conocimiento-leng.component.css']
})
export class ConocimientoLengComponent implements OnInit {
  conocimientoss!:Conocimientos[];
  constructor(private service: ConocimientosService, private router: Router) { }
  
  ngOnInit(): void {
    this.service.getConocimientos()
    .subscribe(data=>{
      this.conocimientoss=data;
    })
    }
      Editar(conocimientos:Conocimientos):void{
        localStorage.setItem("id",conocimientos.id.toString());
        this.router.navigate(["editarConocimientos"]);
      }
    
      Delete(conocimientos:Conocimientos){
        this.service.deleteConocimientos(conocimientos)
        .subscribe(data=>{
          this.conocimientoss=this.conocimientoss.filter(p=>p!==conocimientos);
          alert("Conocimiento eliminado...");
        })
  }
  Nuevo(){
    this.router.navigate(['conocimientosAgregar']);
  }

  hasRoute(route: string)
  {
    return this.router.url == route
  }
}
