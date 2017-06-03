import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-teclado',
  templateUrl: 'teclado.html'
})
export class TecladoPage {

  private tipo;
  private numeros = [];
  private valor = '';
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tipo = navParams.get('tipo');
  }

  addInList(number){    
      this.numeros.push(number);
      this.valor = this.numeros.join('')
  }

  removeOfList(){
      this.numeros.shift();
      this.valor = this.numeros.join('') 
  }
}

