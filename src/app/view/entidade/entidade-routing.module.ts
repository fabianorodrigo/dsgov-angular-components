import { EntidadeResolver } from './entidade.resolver';
import { EntidadeFormComponent } from './entidade-form/entidade-form.component';
import { EntidadeListaComponent } from './entidade-lista/entidade-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/core/auth';
import { DeactiveGuardService } from 'src/app/shared/guards';

export const routes: Routes = [
  { path: '', component: EntidadeListaComponent },
  {
    path: ':acao',
    component: EntidadeFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':acao/:id',
    component: EntidadeFormComponent,
    canDeactivate: [DeactiveGuardService],
    canActivate: [AuthGuard],
    resolve: { registro: EntidadeResolver },
  },
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class EntidadeRoutingModule {}
