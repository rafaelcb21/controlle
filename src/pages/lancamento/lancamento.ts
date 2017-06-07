import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { CategoriaModalPage } from '../categoria-modal/categoria-modal';
import { RepetirModalPage } from '../repetir-modal/repetir-modal';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-lancamento',
  templateUrl: 'lancamento.html'
})
export class LancamentoPage implements OnInit{

  public tipo: string;
  public valor: string = '';
  public data: string;
  public categoria: string;
  public cartao: string;
  public mesFatura: string;
  public selectFatura: boolean = false;
  public observacao: boolean = false;
  public repetir: string = '';
  public periodo: string = '';
  public quantidade: string = '';


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private view: ViewController,
    public modalCtrl: ModalController
  ){}

  ngOnInit(){
      this.data = new Date().toISOString();
      this.valor = this.navParams.get('valor');
      this.tipo = this.navParams.get('tipo');
      this.repetir = this.navParams.get('repetir');
      this.periodo = this.navParams.get('periodo');
      this.quantidade = this.navParams.get('quantidade');

      console.log(this.valor)
      console.log(this.tipo)
      console.log(this.repetir)
      console.log(this.periodo)
      console.log(this.quantidade)

  }

  abrirModalCategoria(tipo) {
    let modal = this.modalCtrl.create(CategoriaModalPage, tipo);
    modal.present();
  }

  abrirModalRepetir(tipo) {
    let modal = this.modalCtrl.create(RepetirModalPage, {tipo: tipo, valor: this.valor});
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

