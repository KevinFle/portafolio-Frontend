import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
@Component({
  selector: 'app-conocimiento-leng',
  templateUrl: './conocimiento-leng.component.html',
  styleUrls: ['./conocimiento-leng.component.css']
})
export class ConocimientoLengComponent implements OnInit {
  conocimientos:any;
  conocimientosTitulo:any;
  constructor(private datosPortfolio: PortfolioService) {
    
  }
  
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>
      {
        console.log(data);
        this.conocimientos=data.conocLeng.lenguaje;
        this.conocimientosTitulo=data.conocLeng.titulo;
      });
  }
  areLogin()
  {
    return localStorage.getItem('login');
  }
}