import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-categoria-modal',
  templateUrl: 'categoria-modal.html',
})
export class CategoriaModalPage {

  private _tipo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this._tipo = navParams.get('tipo');
  }

  sair() {
    this.viewCtrl.dismiss();
  }
}
