import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class DeactiveGuardService implements CanDeactivate<any> {
  constructor() {}

  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (
      currentRoute &&
      (currentRoute.params['acao'] === 'inserir' || currentRoute.params['acao'] === 'editar') &&
      !component.formulario.pristine
    ) {
      return confirm('As alterações não salvas serão perdidas. Deseja sair da página sem salvar as alterações?');
    } else {
      return true;
    }
  }
}
