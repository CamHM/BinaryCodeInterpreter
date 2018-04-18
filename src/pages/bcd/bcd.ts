import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bcd',
  templateUrl: 'bcd.html',
})
export class BcdPage {

  isToDecimal: boolean;
  isToBCD: boolean;
  actualInput: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BcdPage');
  }

  enableToDecimal(){
    this.isToBCD = false;
    this.isToDecimal = true;
  }

  enableToBCD(){
    this.isToBCD = true;
    this.isToDecimal = false;
  }

  calculate(inputValue:number):number{
    if(this.isToBCD == true){
      return 1;
    }else if(this.isToDecimal == true){
      this.showActionSheet(this.actualInput);
      return this.actualInput;
    }
  }

  showActionSheet(result:number):void{
    let actionSheet = this.actionSheetCtrl.create({
     title: result.toString(),
     subTitle: 'RESULTADO',
     cssClass: 'page-bcd',
     buttons: [
       {
         text: 'Volver',
         role: 'cancel',
         handler: () => {
           console.log('back clicked');
         }
       }
     ]
   });
   actionSheet.present();
  }
}
