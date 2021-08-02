import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.userService.isLogged()) {
      //se está logado, segue o fluxo
      return true;
    } else {
      //se NÃO está logado, redireciona para a url '/login?redirect=<urlParaOndeIria>'
      this.router.navigate(['/', 'login'], { queryParams: { redirectTo: route.url.join('/') } });
      return false;
    }
  }
}
