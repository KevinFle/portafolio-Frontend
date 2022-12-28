import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/modelo/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = new User();
  constructor(private serviceLogin: LoginService) { }

  ngOnInit(): void {
  }

  userLogin(){
    console.log(this.user);
    this.serviceLogin.loginUser(this.user).subscribe(data=>{
      window.location.href="/modoEdicion"
    },error=>alert("Por favor ingrese un usuario y contraseña correcto"));
  }
}
