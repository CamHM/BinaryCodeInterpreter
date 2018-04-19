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

  isBCD(num:number):boolean{
    let code = String(num);
    let isBCD = true;
    if(code.length % 4 != 0){
      code = this.complete(code);
    }
    for(let i = 0; i < code.length; i=i+4){
      let num = this.toDecimal(code.substring(i, i+4));
      if(!(num >= 0 && num <= 9)){
        isBCD = false;
      }
    }
    return isBCD;
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

  calculate():void{
    if(this.isBCD(this.actualInput)){
      if(this.isBCDex3){
        this.showActionSheet(this.complete(this.toBCDex3(this.actualInput)));
      }else if(this.isGray){
        this.showActionSheet(this.toGray(String(this.actualInput)));
      }else{
        alert('Selecciona una opción');
      }
    }else{
      alert('Codigo BCD no valido');
    }
  }

  toBCDex3(bcd: number): String{
    let code = String(bcd);
    let bcdEx3 = "";
    if(code.length % 4 != 0){
      code = this.complete(code);
    }
    for(let i = 0; i < code.length; i=i+4){
      bcdEx3 = bcdEx3 + this.toBinary(this.toDecimal(code.substring(i, i+4)) + 3);
    }
    return bcdEx3;
  }

  toBinary(num: number): String{
    return num.toString(2);
  }

  toGray(bcd: String): String{
    let num = "";
    for(let i = 0; i < bcd.length; i=i+4){
      num = num + this.toDecimal(bcd.substring(i, i+4));
    }
    let codeGray = this.generateGray(parseInt(Math.log2(parseInt(num))));
    return codeGray.split("\n")[parseInt(num)];
  }

  showActionSheet(result:String):void{
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

  generateGray(bits: number):string{
    let gray = "0" + "\n" + "1";
    for(let i = 0; i < bits - 1; i++){
      gray = this.getGray(gray);
    }
    return gray;
  }

  getGray(initGray: string): string{
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
}
