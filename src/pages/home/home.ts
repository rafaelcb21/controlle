import { Component } from '@angular/core';
import { NavController, MenuController, FabContainer } from 'ionic-angular';
import { TecladoPage } from '../teclado/teclado';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, menu: MenuController) {
    menu.enable(true);
  }

  teclado(tipo: String, fab: FabContainer){
    this.navCtrl.push(TecladoPage, {tipo: tipo});
    fab.close()
  }

}

