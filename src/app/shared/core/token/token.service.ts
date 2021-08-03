import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { User } from '../user/user';

const KEY = 'authToken';

@Injectable({ providedIn: 'root' })
export class TokenService {
  temTokenValido() {
    return this.getToken() != null && this.getToken() != '' && !this.eTokenExpirado();
  }

  eTokenExpirado() {
    const token = this.getToken();
    const user = jwt_decode.default(token) as User;
    const agoraSegundosDesde1970 = Math.floor(new Date().getTime() / 1000);
    return user.exp <= agoraSegundosDesde1970;
  }

  setToken(token) {
    window.localStorage.setItem(KEY, token);
  }

  getToken() {
    return window.localStorage.getItem(KEY);
  }

  removeToken() {
    window.localStorage.removeItem(KEY);
  }
}
