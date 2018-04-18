import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ex3',
  templateUrl: 'ex3.html',
})
export class Ex3Page {

  toDecimal: boolean;
  toBCDex3: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ex3Page');
  }

  calculateDecimal(){
    console.log('Decimal');
  }

  calculateBCDex3(){
    console.log('Ex3');
  }

  calculate(){
    
  }
}
