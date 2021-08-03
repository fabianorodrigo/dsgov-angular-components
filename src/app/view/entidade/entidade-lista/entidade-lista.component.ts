import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaComponent } from 'src/app/shared/components/paginas';
import { AuthService } from 'src/app/shared/core';
import { EntidadeService } from './../../../services';

const LABEL_BREAD_CRUMB = 'Entidade';
const NOME_ENTIDADE = 'entidade';
const CAMINHO = `/${NOME_ENTIDADE}`;

@Component({
  selector: 'br-entidade-lista',
  templateUrl: './entidade-lista.component.html',
  styleUrls: ['./entidade-lista.component.css'],
})
export class EntidadeListaComponent extends ListaComponent implements OnInit {
  constructor(router: Router, authenticationService: AuthService, service: EntidadeService) {
    super(router, authenticationService, service, NOME_ENTIDADE);
  }

  ngOnInit(): void {}
}
