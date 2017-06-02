import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-teclado',
  templateUrl: 'teclado.html'
})
export class TecladoPage {

  private tipo;
  private list_numbers = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tipo = navParams.get('tipo');
  }

  screen(number){
    this.list_numbers.push(number);
    //this.valor = this.valor + number

  }

  pop(){
    this.list_numbers.pop();
    //this.valor = this.valor + number

  }
}

