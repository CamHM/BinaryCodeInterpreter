import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ex3',
  templateUrl: 'ex3.html',
})
export class Ex3Page {

  isBCD: boolean;
  isGray: boolean;
  actualInput: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ex3Page');
  }

  setOnBCD():void{
    this.isBCD = true;
    this.isGray = false;
  }

  setOnGray():void{
    this.isBCD = false;
    this.isGray = true;
  }

  isBCDex3(num:number):boolean{
    let code = num.toString();
    let isBCD = true;
    if(code.length % 4 != 0){
      code = this.complete(code);
    }
    for(let i = 0; i < code.length; i=i+4){
      let num = this.toDecimal(code.substring(i, i+4));
      if(!(num >= 3 && num <= 12)){
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

  toBinary(num: number): String{
    return num.toString(2);
  }

  toBCD(ex3: String): String{
    let ex3 = String(ex3);
    let bcd = "";
    if(ex3.length % 4 != 0){
      ex3 = this.complete(ex3);
    }
    for(let i = 0; i < ex3.length; i=i+4){
      bcd = bcd + this.toBinary(this.toDecimal(ex3.substring(i, i+4)) - 3);
    }
    return bcd;
  }

  calculate():void{
    if(this.isBCDex3(this.actualInput)){
      if(this.isBCD){
        this.showActionSheet(this.complete(String(this.toBCD(this.actualInput))));
      }else if(this.isGray){
        this.showActionSheet(this.toGray(String(this.actualInput)));
      }else{
        alert('Selecciona una opción');
      }
    }else{
      alert('Codigo BCDex3 no valido');
    }
  }

  toGray(bcd: String): String{
    let num = "";
    for(let i = 0; i < bcd.length; i=i+4){
      num = num + this.toDecimal(bcd.substring(i, i+4)) - 3;
      alert(num);
    }
    alert(num);
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
