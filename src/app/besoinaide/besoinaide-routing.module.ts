import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BesoinaidePage } from './besoinaide.page';

const routes: Routes = [
  {
    path: '',
    component: BesoinaidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BesoinaidePageRoutingModule {}
