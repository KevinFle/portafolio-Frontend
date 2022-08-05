import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  miportfolio:any;
  name:any;
  constructor( 
    private datosPortfolio:PortfolioService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {

  this.datosPortfolio.obtenerDatos().subscribe(data =>
  {
    console.log(data);
    this.miportfolio=data;
  });
  this.route.queryParams.subscribe(params => {
    this.name = params['name'];
  });
}
}
