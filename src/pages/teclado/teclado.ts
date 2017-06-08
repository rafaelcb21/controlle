import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LancamentoPage } from '../lancamento/lancamento';

@Component({
  selector: 'page-teclado',
  templateUrl: 'teclado.html',
})
export class TecladoPage implements OnInit{

  public tipo: string;
  public numeros: string[] = [];
  public valor: string = '';
  public cabecalho: string;
  public valorNumber: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit(){
    this.tipo = this.navParams.get('tipo');
    this.valorNumber= this.navParams.get('valor');

    if(this.valorNumber != undefined) {     
      for(let i = 0; i < this.valorNumber.length; i++){
        this.numeros.push(this.valorNumber.charAt(i))
      }
      this.valor = this.numeros.join('');

    }
    if(this.tipo == "despesa") {
      this.cabecalho = "Despesa";
    }
    if(this.tipo == "receita") {
      this.cabecalho = "Receita";
    }
    if(this.tipo == "transferência") {
      this.cabecalho = "Transferência";
    }
  }

  adicionarNaLista(number){
      this.numeros.push(number);
      this.valor = this.numeros.join('')
  }

  removerDaLista(){
      this.numeros.pop();
      this.valor = this.numeros.join('')
  }

  registarLancamento(tipo, valor){
    this.navCtrl.push(LancamentoPage, {valor: valor, tipo: tipo})
  }
}

