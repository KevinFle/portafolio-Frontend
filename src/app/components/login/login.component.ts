import { Component, Input, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:any;
  emailData:any;
  contrasenaData:any;
  areLogin:any;
  password:string = "";
  email:string = "";
  constructor(private datosPortfolio: PortfolioService,
    private router:Router) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>
      {
        this.login=data.login;
        this.emailData = data.email;
        this.contrasenaData = data.contrasena
      })
      this.areLogin =false
      localStorage.setItem('areLogin','false');
  }
  hasRoute(route: string)
  {
    return this.router.url == route
  }  
}
