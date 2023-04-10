import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.page.html',
  styleUrls: ['./agendamentos.page.scss'],
})
export class AgendamentosPage implements OnInit {
  public procedimento: string = '';


  constructor(private nav: NavController) { }

  ngOnInit() {
  }
  back(){
    this.nav.navigateBack('welcome');
  }

  agendar(){
    alert('Agendamento concluído.')
    this.nav.navigateBack('welcome');

  }


  procedimentos: string[] = [

    'Clareamento Dental',
    'Faceta Dental',
    'Extração',
    'Bruxismo',
    'Estomatologia',
    'Limpeza Dentária',
    'Periodontia',
    'Tratamento de Canal',
    'Enxerto Ósseo',
    'Implante Dentário',
    'Disfunção da ATM'
  ]
  footer = "Amanda Souza - GU3018067"
}
