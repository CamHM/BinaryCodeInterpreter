import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BcdPage } from '../bcd/bcd';
import { Ex3Page } from '../ex3/ex3';
import { GrayPage } from '../gray/gray';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToBCD():void{
    this.navCtrl.push(BcdPage);
  }

  goToBCDex3():void{
    this.navCtrl.push(Ex3Page);
  }

  goToGray():void{
    this.navCtrl.push(GrayPage);
  }
}
