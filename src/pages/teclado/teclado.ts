import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LancamentoPage } from '../lancamento/lancamento';

@Component({
  selector: 'page-teclado',
  templateUrl: 'teclado.html',
})
export class TecladoPage {

  private _tipo: string;
  private _numeros: string[] = [];
  private _valor: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this._tipo = navParams.get('tipo');
  }

  adicionarNaLista(number){    
      this._numeros.push(number);
      this._valor = this._numeros.join('')
  }

  removerDaLista(){
      this._numeros.pop();
      this._valor = this._numeros.join('') 
  }

  registarLancamento(tipo, valor){
    this.navCtrl.push(LancamentoPage, {valor: valor, tipo: tipo})
  }
}

