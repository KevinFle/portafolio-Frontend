import { Component, OnInit } from '@angular/core';
import { SobreService } from 'src/app/services/sobre.service';
import { Sobre } from 'src/app/modelo/sobre';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  sobress!: Sobre[];
  constructor(private service: SobreService, private router:Router) { }

  ngOnInit(): void {
    this.service.getSobre()
    .subscribe(data=>{
      this.sobress=data;
  })


}
Editar(sobre:Sobre):void{
  localStorage.setItem("id",sobre.id.toString());
  this.router.navigate(["editarSobre"]);
}

Delete(sobre:Sobre){
  this.service.deleteSobre(sobre)
  .subscribe(data=>{
    this.sobress=this.sobress.filter(p=>p!==sobre);
    alert("Sobre eliminado...");
  })
}
Nuevo(){
this.router.navigate(['sobreAgregar']);
}

hasRoute(route: string)
{
return this.router.url == route
}

}
