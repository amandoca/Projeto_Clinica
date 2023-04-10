import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {
  }

  
  move(toPage:string):void{
    this.nav.navigateForward(toPage);
  }
  
  footer = "Amanda Souza - GU3018067"

}
