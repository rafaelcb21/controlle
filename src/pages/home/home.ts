import { Component } from '@angular/core';
import { NavController, MenuController, FabContainer, Platform } from 'ionic-angular';
import { TecladoPage } from '../teclado/teclado';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, menu: MenuController, statusBar: StatusBar, public platform: Platform) {
    menu.enable(true);
    this.platform.ready().then(() => {
      statusBar.backgroundColorByHexString("#2196F3");
    })

  }

  teclado(tipo: String, fab: FabContainer){
    this.navCtrl.push(TecladoPage, {tipo: tipo});
    fab.close()
  }

}

