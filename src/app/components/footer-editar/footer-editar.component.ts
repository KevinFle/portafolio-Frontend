import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Footer } from 'src/app/modelo/footer';
import { FooterService } from 'src/app/services/footer.service';

@Component({
  selector: 'app-footer-editar',
  templateUrl: './footer-editar.component.html',
  styleUrls: ['./footer-editar.component.css']
})
export class FooterEditarComponent implements OnInit {
  footer:Footer = new Footer();
  constructor(private router:Router, private service:FooterService) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.service.getFooterId(+Number(id))
    .subscribe(data=>{
      this.footer=data;
    })
  }

  Actualizar(footer:Footer){
    this.service.updateFooter(footer)
    .subscribe(data=>{
    this.footer=data;
    alert("Se actualizo con Exito");
    this.router.navigate(["/modoEdicion"]);
    })
  }
}
