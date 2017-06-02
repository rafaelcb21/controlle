import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-teclado',
  templateUrl: 'teclado.html'
})
export class TecladoPage {

  private tipo;
  private valor;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tipo = navParams.get('tipo');
  }

  screen(number){
    this.valor = this.valor + number

  }
}

