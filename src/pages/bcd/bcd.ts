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

  isBCDex3: boolean;
  isGray: boolean;
  actualInput: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BcdPage');
  }

  setOnBCDex3():void{
    this.isBCDex3 = true;
    this.isGray = false;
  }

  setOnGray():void{
    this.isBCDex3 = false;
    this.isGray = true;
  }

  isValidate(input:number):boolean{
    var inputString = String(input);
    let pattern = /[0-1]/;
    prompt("Valido: " + inputString+ " " + pattern.test(inputString));
    return pattern.test(inputString);  
  }

  calculate():void{
    this.isValidate(this.actualInput);
    if(this.isBCDex3 == true){
      this.showActionSheet(this.toBCDex3(this.actualInput));
    }else if(this.isGray == true){
      this.showActionSheet(this.actualInput);
    }
  }

  toBCDex3(bcd:number):number{
    return 0;
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
