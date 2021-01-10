import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProposeaidePage } from './proposeaide.page';

const routes: Routes = [
  {
    path: '',
    component: ProposeaidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProposeaidePageRoutingModule {}
