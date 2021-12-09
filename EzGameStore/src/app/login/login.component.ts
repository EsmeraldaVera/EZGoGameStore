import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { LoginUserService } from '../login-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  
 
  constructor(private LoginUserService:LoginUserService) {}

  ngOnInit(): void {
  }

  handleLogin(){
    console.log(this.user)
    this.LoginUserService.handleLogin(this.user).subscribe(data=>{
      alert('Login Successful')
    }, error => alert(`Invalid Password and Username Combo`))
  }

}

