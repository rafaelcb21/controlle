import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-conta-modal',
  templateUrl: 'conta-modal.html',
})
export class ContaModalPage {

  private _tipo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this._tipo = navParams.get('tipo');
    console.log(this._tipo)
  }

  sair() {
    this.viewCtrl.dismiss();
  }
}
