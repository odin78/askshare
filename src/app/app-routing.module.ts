import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'besoinaide',
    loadChildren: () => import('./besoinaide/besoinaide.module').then( m => m.BesoinaidePageModule)
  },
  {
    path: 'proposeaide',
    loadChildren: () => import('./proposeaide/proposeaide.module').then( m => m.ProposeaidePageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/register.module').then( m => m.RegisterPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
