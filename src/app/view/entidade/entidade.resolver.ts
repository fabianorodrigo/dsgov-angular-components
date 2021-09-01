import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Entidade } from 'src/app/model';
import { EntidadeService } from './../../services';

@Injectable({ providedIn: 'root' })
export class EntidadeResolver implements Resolve<Observable<Entidade>> {
  constructor(private service: EntidadeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params.id;
    return this.service.obter(id);
  }
}
