import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class cadastrarPage implements OnInit {
  public nome: string = '';
  public pet: string = '';
  public raca: string = '';
  public cor: string = '';
  public celular: string = '';
  public email: string = '';
  public nascimento: string = '';
  public racaSelecionada: string = '';
  public corSelecionada: string = '';
  public senha: string = '';

  formatarTelefone() {
    if (this.celular.length === 10) {
      this.celular = '(' + this.celular.substr(0, 2) + ')' + this.celular.substr(2, 4) + '-' + this.celular.substr(6, 4);
    } else if (this.celular.length === 11) {
      this.celular = '(' + this.celular.substr(0, 2) + ')' + this.celular.substr(2, 5) + '-' + this.celular.substr(7, 4);
    }
  }

  constructor(private nav: NavController) { }

  ngOnInit() {

  }

  back(){
    this.nav.navigateBack('welcome');
  }

  send(){
    console.log(this.nome);
    console.log(this.celular);
    console.log(this.email);
    console.log(this.pet);
    console.log(this.racaSelecionada);
    console.log(this.corSelecionada);
    console.log(this.nascimento.toString().split('T')[0]);

    const nascimentoDate = new Date(this.nascimento);
    const maxDate = new Date();
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 25);

    if (nascimentoDate > maxDate || nascimentoDate < minDate) {
      alert('Selecione uma data de nascimento válida.');
      return;
    }

    const nome = this.nome;
    const email = this.email;
    const celular = this.celular;
    const pet = this.pet;
    const raca = this.racaSelecionada;
    const cor = this.corSelecionada;
    const nascimento = this.nascimento.toString().split('T')[0];
    const data = {nome, email, celular, pet, raca, nascimento};

    console.log(data);
    localStorage.setItem('pessoa', JSON.stringify(data));
  }

  colors: string[] = [
    'Preto',
    'Branco',
    'Marrom',
    'Caramelo',
    'Rajado'
  ]

  breeds: string[] = [
    'Basset Hound',
    'Bichon Frisé',
    'Border Collie',
    'Bulldog',
    'Bull Terrier',
    'Chihuahua',
    'Cocker Spaniel',
    'Dachshund',
    'Dobermann',
    'Golden Retriever',
    'Husky',
    'Labrador Retriever',
    'Pastor Alemão',
    'Poodle',
    'Pug',
    'Rottweiler',
    'Sem Raça Definida',
    'Shih-tzu',
    'Yorkshire',
    'West Highland White Terrier'
  ];

  save(){
    this.nav.navigateBack('welcome');

  }
  footer = "Amanda Souza - GU3018067"
}
