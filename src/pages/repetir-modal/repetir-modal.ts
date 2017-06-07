import { LancamentoPage } from './../lancamento/lancamento';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-repetir-modal',
  templateUrl: 'repetir-modal.html',
})
export class RepetirModalPage {
  private tipo: string;
  public valor: string;
  public repetir: string = '';
  public quantidade: string = '';
  public periodo: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController) {

      this.tipo = navParams.get('tipo');
      this.valor = navParams.get('valor');
 }

  sair() {
    this.viewCtrl.dismiss();
  }

  registarLancamento(repetir, periodo, quantidade){
    if(repetir == "parcelado" && periodo == ''){
      this.showAlert('Escolha um periodo')
    }else if(repetir == "parcelado" && quantidade == ''){
      this.showAlert('Escolha um numero para o periodo desejado')
    }else if(repetir == "fixo" && periodo == ''){
      this.showAlert('Escolha um periodo')
    }else{
      let resultado = {repetir: repetir, periodo: periodo, quantidade: quantidade, tipo: this.tipo, valor: this.valor}
      this.navCtrl.push(LancamentoPage, resultado)
    }
  }

  showAlert(frase) {
    let alert = this.alertCtrl.create({
      title: 'Erro',
      subTitle: frase,
      buttons: ['OK']
    });
    alert.present();
  }

}
