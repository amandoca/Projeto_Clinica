import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})
export class ServicosPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  back(){
    this.nav.navigateBack('welcome');
  }

  footer = "Amanda Souza - GU3018067"
}
