import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BesoinaidePageRoutingModule } from './besoinaide-routing.module';

import { BesoinaidePage } from './besoinaide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BesoinaidePageRoutingModule
  ],
  declarations: [BesoinaidePage]
})
export class BesoinaidePageModule {}
