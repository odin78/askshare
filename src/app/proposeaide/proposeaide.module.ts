import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProposeaidePageRoutingModule } from './proposeaide-routing.module';

import { ProposeaidePage } from './proposeaide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProposeaidePageRoutingModule
  ],
  declarations: [ProposeaidePage]
})
export class ProposeaidePageModule {}
