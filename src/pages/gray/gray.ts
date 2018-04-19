import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-gray',
  templateUrl: 'gray.html',
})
export class GrayPage {

  isBCD: boolean;
  isBCDex3: boolean;
  isGrayCode: boolean;
  actualInput: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrayPage');
  }

  setOnBCD():void{
    this.isBCD = true;
    this.isBCDex3 = false;
    this.isGrayCode = false;
  }

  setOnBCDex3():void{
    this.isBCD = false;
    this.isBCDex3 = true;
    this.isGrayCode = false;
  }

  setOnGrayCode():void{
    this.isBCD = false;
    this.isBCDex3 = false;
    this.isGrayCode = true;
  }

  generateGray(bits: number):String{
    let gray = "0" + "\n" + "1";
    for(let i = 0; i < bits - 1; i++){
      gray = this.getGray(gray);
    }
    return gray;
  }

  getGray(initGray: String): String{
    let code = initGray.split("\n");
    let generateCode = "";
    for(let i = 0; i < code.length; i++){
      generateCode = generateCode + "\n0" + code[i] ;
    }
    for(let i = code.length - 1; i >= 0; i--){
      generateCode = generateCode + "\n1" + code[i];
    }
    return generateCode;
  }

  calculateGray():void{
    if(this.isBCD){
      this.showActionSheet(this.toBCD(String(this.actualInput)));
    }else if(this.isBCDex3){
      this.showActionSheet(this.toBCDex3(String(this.actualInput)));
    }else if(this.isGrayCode){
      this.showActionSheet(this.generateGray(this.actualInput));
    }else{
      alert('Selecciona una opción');
    }
  }

  toBCD(gray: String):String{
    let count = 0;
    let find = false;
    let grayCode = this.generateGray(4).split("\n");
    while(count < grayCode.length && !find){
      if(grayCode[count] === gray){
        find = true;
      }else{
          count++;
      }
    }
    alert('Count: ' + count);
    let num = String(count).split("");
    let bcd = "";
    for(let i = 0; i < num.length; i++){
      bcd += this.complete(this.toBinary(parseInt(num[i])))
    }
    return bcd;
  }

  toBCDex3(gray: String):String{
    let count = 0;
    let find = false;
    let grayCode = this.generateGray(4).split("\n");
    while(count < grayCode.length && !find){
      if(grayCode[count] === gray){
        find = true;
      }
      count++;
    }
    alert('Count: ' + count);
    let num = String(count + 3).split("");
    let bcd = "";
    for(let i = 0; i < num.length; i++){
      bcd += this.complete(this.toBinary(parseInt(num[i])))
    }
    return bcd;
  }

  complete(code: String):String{
    let digits = "";
    for(let i=0; i < (4 - (code.length % 4)); i++){
      digits = digits + "0";
    }
    return digits + code;
  }

  toDecimal(num: String): number{
    return parseInt(String(num), 2);
  }

  toBinary(num: number): String{
    return num.toString(2);
  }

  showActionSheet(result:string):void{
     let actionSheet = this.actionSheetCtrl.create({
     title: result,
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
