import { DialogOkComponent } from '../../components';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TokenService } from '../token/token.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService, public dialog: MatDialog, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.tokenService.temTokenValido()) {
      const token = this.tokenService.getToken();
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((error: HttpErrorResponse, _: Observable<HttpEvent<any>>) => {
        if (error.status == 401) {
          this.tokenService.removeToken();
          //se NÃO está logado, redireciona para a url '/login?redirect=<urlParaOndeIria>'
          this.router.navigate(['/', 'login'], {
            queryParams: { redirectTo: this.router.url },
          });
        } else if (error.status == 0 || error.status >= 500) {
          let msg = ``;
          if (error.status == 0) {
            msg = `Falha de conexão com o servidor.`;
          } else if (error.status >= 500) {
            msg = `Falha no servidor.`;
          }
          const dialogRef = this.dialog.open(DialogOkComponent, {
            width: '50%',
            data: {
              titulo: 'Erro',
              pergunta: msg.concat(` Contate o administrador do sistema.`),
            },
          });

          dialogRef.afterClosed().subscribe(resposta => {});
        }
        return throwError(error);
      }),
    );
  }
}
