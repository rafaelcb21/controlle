import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { CategoriaModalPage } from '../categoria-modal/categoria-modal';
import { ContaModalPage } from '../conta-modal/conta-modal';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-lancamento',
  templateUrl: 'lancamento.html'
})
export class LancamentoPage {

  private _tipo: string;
  private _valor: string = '';
  private _data: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private view: ViewController,
    public modalCtrl: ModalController
  ){
    this._valor = navParams.get('valor');
    this._tipo = navParams.get('tipo');
    this._data = new Date().toISOString();
  }


  abrirModalCategoria(tipo) {
    let modal = this.modalCtrl.create(CategoriaModalPage, tipo);
    modal.present();
  }

  abrirModalConta(tipo) {
    let modal = this.modalCtrl.create(ContaModalPage, tipo);
    modal.present();
  }

  sair(){
    this.navCtrl.setRoot(HomePage);
  }
}

