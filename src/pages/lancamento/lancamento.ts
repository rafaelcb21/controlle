import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-lancamento',
  templateUrl: 'lancamento.html'
})
export class LancamentoPage {

  private tipo;
  private numeros = [];
  private valor = '';
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.valor = navParams.get('valor');
    this.tipo = navParams.get('tipo');
  }


}

