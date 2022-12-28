import { Component, OnInit } from '@angular/core';
import { Footer } from 'src/app/modelo/footer';
import { FooterService } from 'src/app/services/footer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerr!: Footer[];
  constructor(private service: FooterService , private router: Router ) { }

  ngOnInit(): void {
    this.service.getFooter()
    .subscribe(data=>{
      this.footerr=data;
  })
  }
  Editar(footer:Footer):void{
    localStorage.setItem("id",footer.id.toString());
    this.router.navigate(["editarFooter"]);
  }
  
  Delete(footer:Footer){
    this.service.deleteFooter(footer)
    .subscribe(data=>{
      this.footerr=this.footerr.filter(p=>p!==footer);
      alert("Footer eliminado...");
    })
  }
  Nuevo(){
  this.router.navigate(['footerAgregar']);
  }
  
  hasRoute(route: string)
  {
  return this.router.url == route
  }
}
