import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  senha: string = '';

  constructor(private nav: NavController) { 
    console.log('LoginPage initialized');
  }

  ngOnInit() {
  }

  login(email:string, senha:string){
    console.log('login() called');
    console.log('User:', email);
    console.log('Senha:',senha);
  }

  back(){
    this.nav.navigateBack('welcome');
  }

  save(){
    this.nav.navigateBack('welcome');

  }

  footer = "Amanda Souza - GU3018067"
}
