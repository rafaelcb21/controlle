import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { CategoriaModalPage } from '../categoria-modal/categoria-modal';
import { RepetirModalPage } from '../repetir-modal/repetir-modal';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-lancamento',
  templateUrl: 'lancamento.html'
})
export class LancamentoPage {

  public tipo: string;
  public valor: string = '';
  public data: string;
  public categoria: string;
  public cartao: string;
  public mesFatura: string;
  public selectFatura: boolean = false;
  public observacao: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private view: ViewController,
    public modalCtrl: ModalController
  ){
    this.valor = navParams.get('valor');
    this.tipo = navParams.get('tipo');
    this.data = new Date().toISOString();
  }

  abrirModalCategoria(tipo) {
    let modal = this.modalCtrl.create(CategoriaModalPage, tipo);
    modal.present();
  }

  abrirModalRepetir(tipo) {
    let modal = this.modalCtrl.create(RepetirModalPage, {tipo: tipo});
    modal.present();
  }

  fatura(event){
    if(event.slice(0,6) == "cartao") {
      this.selectFatura = true;
    }
  }

  sair(){
    this.navCtrl.setRoot(HomePage);
  }

  campoObservacao(status){
    this.observacao = status;
  }
}

