import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { LancamentoPage } from '../lancamento/lancamento';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-teclado',
  templateUrl: 'teclado.html',
})
export class TecladoPage {// implements OnInit{

  public tipo: string;
  public tipoCor: string;
  public corBar: string;
  public numeros: string[] = [];
  public valor: string = '';
  public cabecalho: string;
  public valorNumber: string;
  public cor: string;
  public tipoColor: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, statusBar: StatusBar, public platform: Platform) {
    this.tipo = this.navParams.get('tipo');
    this.valorNumber= this.navParams.get('valor');

    if(this.valorNumber != undefined) {
      for(let i = 0; i < this.valorNumber.length; i++){
        this.numeros.push(this.valorNumber.charAt(i))
      }
      this.valor = this.numeros.join('');

    }

    this.platform.ready().then(() => {
        if(this.tipo == "despesa"){
            statusBar.backgroundColorByHexString("#F44336");
        }
        if(this.tipo == "receita"){
            statusBar.backgroundColorByHexString("#66BB6A");
        }
        if(this.tipo == "transferência"){
            statusBar.backgroundColorByHexString("#9E9E9E");
        }
    })
  }

  //ngOnInit(){
  //ionViewWillEnter() {
  //  this.tipo = this.navParams.get('tipo');
  //  this.valorNumber= this.navParams.get('valor');
//
  //  if(this.valorNumber != undefined) {
  //    for(let i = 0; i < this.valorNumber.length; i++){
  //      this.numeros.push(this.valorNumber.charAt(i))
  //    }
  //    this.valor = this.numeros.join('');
//
  //  }
  //  console.log(this.tipo)
  //  console.log(this.valor)
  //  this.platform.ready().then(() => {
  //      console.log(this.tipo)
  //      if(this.tipo == "despesa"){
  //          statusBar.backgroundColorByHexString("#F44336");
  //      }
  //      if(this.tipo == "receita"){
  //          this.statusBar.backgroundColorByHexString("#66BB6A");
  //      }
  //      if(this.tipo == "transferência"){
  //          this.statusBar.backgroundColorByHexString("#9E9E9E");
  //      }
  //  })

    //if(this.tipo == "despesa") {
    //  this.cabecalho = "Despesa";
    //  this.statusBar.backgroundColorByHexString("#F44336");
    //  console.log(this.tipo)
    //}
    //if(this.tipo == "receita") {
    //  this.cabecalho = "Receita";
    //  this.statusBar.backgroundColorByHexString("#66BB6A");
    //  console.log(this.tipo)
    //}
    //if(this.tipo == "transferência") {
    //  this.cabecalho = "Transferência";
    //  this.statusBar.backgroundColorByHexString("#9E9E9E");
    //  console.log(this.tipo)
    //}
  //}

  //ionViewDidLoad() {
  //  this.tipoCor = this.navParams.get('type');
  //
  //  this.platform.ready().then(() => {
  //      console.log(this.tipoCor)
  //      if(this.tipoCor == "despesa"){
  //          this.statusBar.backgroundColorByHexString("#F44336");
  //      }
  //      if(this.tipoCor == "receita"){
  //          this.statusBar.backgroundColorByHexString("#66BB6A");
  //      }
  //      if(this.tipoCor == "transferência"){
  //          this.statusBar.backgroundColorByHexString("#9E9E9E");
  //      }
  //  })
  //}

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

