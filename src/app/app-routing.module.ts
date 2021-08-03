import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./view/home/home.module').then(modulo => modulo.HomeModule) },
  {
    path: 'entidade',
    loadChildren: () => import('./view/entidade/entidade.module').then(modulo => modulo.EntidadeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
