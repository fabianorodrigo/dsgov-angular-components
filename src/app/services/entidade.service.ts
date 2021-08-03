import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './../shared/core/data';

const NOME_ENTIDADE = 'entidade';

@Injectable({
  providedIn: 'root',
})
export class EntidadeService extends DataService {
  constructor(http: HttpClient) {
    super(http, NOME_ENTIDADE);
  }
}
