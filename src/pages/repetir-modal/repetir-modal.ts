import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-repetir-modal',
  templateUrl: 'repetir-modal.html',
})
export class RepetirModalPage {
  private _tipo: string;
  public testRadioOpen: boolean;
  public periodoEscolhido: string;
  public periodoFixo: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alerCtrl: AlertController) {
    this._tipo = navParams.get('tipo');
 }

  sair() {
    this.viewCtrl.dismiss();
  }

  fixoRadio() {
    let alert = this.alerCtrl.create();
    alert.setTitle('Período');

    alert.addInput({
      type: 'radio',
      label: 'Diária',
      value: 'diaria'
    });

    alert.addInput({
      type: 'radio',
      label: 'Semanal',
      value: 'semanal'
    });

    alert.addInput({
      type: 'radio',
      label: 'Quinzenal',
      value: 'quinzenal'
    });

    alert.addInput({
      type: 'radio',
      label: 'Mensal',
      value: 'mensal'
    });

    alert.addInput({
      type: 'radio',
      label: 'Bimestral',
      value: 'bimestral'
    });

    alert.addInput({
      type: 'radio',
      label: 'Trimestral',
      value: 'trimestral'
    });

    alert.addInput({
      type: 'radio',
      label: 'Semestral',
      value: 'semestral'
    });

    alert.addInput({
      type: 'radio',
      label: 'Anual',
      value: 'anual'
    });

    //alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        if(data == 'diaria'){
          this.periodoEscolhido = 'Diária'
        }else{
          this.periodoEscolhido = data.charAt(0).toUpperCase() + data.slice(1);
        }
        this.testRadioOpen = false;
        this.periodoFixo = true;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

}
