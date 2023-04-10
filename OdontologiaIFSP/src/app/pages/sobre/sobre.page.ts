import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  back(){
    this.nav.navigateBack('welcome');
  }

  footer = "Amanda Souza - GU3018067"
}
