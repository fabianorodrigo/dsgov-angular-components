import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntidadeTesteComponent } from './entidade/entidade-teste/entidade-teste.component';
import { EntidadeComponent } from './entidade/entidade/entidade.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(modulo => modulo.HomeModule),
  },
  {
    path: 'entidade',
    component: EntidadeComponent,
  },
  {
    path: 'entidadeTeste',
    component: EntidadeTesteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
