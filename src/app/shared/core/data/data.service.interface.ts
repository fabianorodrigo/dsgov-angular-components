import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestUtil } from '../../utils';

export interface IDataService {
  obterTodos(): Observable<any>;

  obter(id: string): Observable<any>;

  filtrar(filtro: string, datasource: MatTableDataSource<any>): Observable<any>;

  cria(instancia: any): Observable<any>;

  atualiza(instancia: any): Observable<any>;

  exclui(id: string): Observable<any>;

  existe(id: string): Observable<boolean>;
}
