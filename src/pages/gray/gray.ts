import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-gray',
  templateUrl: 'gray.html',
})
export class GrayPage {

  toDecimal: boolean;
  toGray: boolean;
  grayCode: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrayPage');
  }

  generateGray():void{

  }

  calculateGray():void{

  }

  calculateDByGray():void{
    
  }
}
