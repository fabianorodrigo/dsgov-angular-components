import { Component, OnInit } from '@angular/core';
import { Usuario } from 'projects/dsgov-components/src/public-api';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario';

@Component({
  selector: 'br-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //é uma convenção que as variáveis Observable terminem com $
  user$: Observable<Usuario>;
  user: Usuario;

  menuExemploVisivel: boolean = false;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {}

  alerta() {
    alert('au au ');
  }

  sirene() {
    alert('uéééénnn uéééénn');
  }

  relogio() {
    alert('tic tac, tic tac');
  }

  signin(event) {
    //this.document.location.href = `https://ssodev.ancine.gov.br/cas/login?redirect_uri=${this.document.location.href}`;
    this.user$ = this.usuarioService.getUsuario();
    this.user$.subscribe((user) => {
      if (user == null) {
        this.user = {} as Usuario;
      } else {
        this.user = user;
      }
      this.user.nomeCompleto = 'José da Silva';
      this.user.email = 'josedasilva@dsgov.br';
      this.user.imgAvatar =
        'data:image/jpeg;base64,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';
    });
  }

  logout(event) {
    //this.fechaMenu();
    this.user = null;
    this.usuarioService.logout();
  }
}
