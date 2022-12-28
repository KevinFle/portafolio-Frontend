import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService} from 'src/app/services/header.service';
import { Header} from 'src/app/modelo/header';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerr!: Header[];
  constructor(private service: HeaderService , private router: Router) { }

  ngOnInit(): void {
    this.service.getHeader()
    .subscribe(data=>{
      this.headerr=data;
  })
}

Editar(header:Header):void{
  localStorage.setItem("id",header.id.toString());
  this.router.navigate(["editarHeader"]);
}

Delete(header:Header){
  this.service.deleteHeader(header)
  .subscribe(data=>{
    this.headerr=this.headerr.filter(p=>p!==header);
    alert("Header eliminado...");
  })
}
Nuevo(){
this.router.navigate(['HeaderAgregar']);
}

hasRoute(route: string)
{
return this.router.url == route
}
}
