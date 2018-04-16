import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BcdPage } from './bcd';

@NgModule({
  declarations: [
    BcdPage,
  ],
  imports: [
    IonicPageModule.forChild(BcdPage),
  ],
})
export class BcdPageModule {}
