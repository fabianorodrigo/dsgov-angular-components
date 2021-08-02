import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { API_URL } from '../parameters';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private userService: UserService) {}

  authenticate(login: string, senha: string) {
    //HttpClient retorna Observable
    //a URL não é de login, é só um teste, só pra simular
    return (
      this.http
        //para ter acesso aos headers, passa-se como terceiro parâmetro o {observe: response}
        .post(API_URL + `/usuarios/login/`, { login, senha }, { observe: 'response' })
        //com o pipe é possível executar um código antes de retornar o Observable
        .pipe(
          //operador tap para ...
          tap(res => {
            const authToken = res.headers.get('x-access-token');
            this.userService.setToken(authToken);
          }),
        )
    );
  }
}
