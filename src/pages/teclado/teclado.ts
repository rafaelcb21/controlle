import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-teclado',
  templateUrl: 'teclado.html'
})
export class TecladoPage {

  private tipo;
  private list_default = ['0','0','0'];
  private numeros = ['0','0','0'];
  //private numeros2;
  private list_insert = [];
  private list_numbers = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tipo = navParams.get('tipo');
  }

  screen(number){    
    if(this.list_default.length <= 3){
      this.list_numbers.push(number);
      this.list_default.pop();
      this.numeros = this.list_default.concat(this.list_numbers)
    }    
  }

  pop(){
    if(this.numeros.length > 3){
      this.numeros.shift();
    }else if(this.numeros.length <= 3 && this.list_insert.length < 3){
      this.numeros.splice(0, 1);
      this.list_insert.push('0');
      console.log(this.numeros)
      console.log(this.list_insert)
    }
    
    if(this.numeros.length < 3 && this.list_insert.length <= 3){
      this.numeros = this.list_insert.concat(this.numeros)
      console.log(this.numeros)
    }
  }
}

