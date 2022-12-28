import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from 'src/app/modelo/header';
import { HeaderService } from 'src/app/services/header.service';
@Component({
  selector: 'app-header-editar',
  templateUrl: './header-editar.component.html',
  styleUrls: ['./header-editar.component.css']
})
export class HeaderEditarComponent implements OnInit {
  header:Header = new Header();
  constructor(private router:Router, private service:HeaderService) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.service.getHeaderId(+Number(id))
    .subscribe(data=>{
      this.header=data;
    })
  }

  Actualizar(header:Header){
    this.service.updateHeader(header)
    .subscribe(data=>{
    this.header=data;
    alert("Se actualizo con Exito");
    this.router.navigate(["/modoEdicion"]);
    })
  }
}
