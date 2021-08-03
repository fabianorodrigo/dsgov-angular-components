import { IDataService } from './data.service.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestUtil } from '../../utils';

export abstract class DataService implements IDataService {
  protected resourceUrl: string;

  constructor(private http: HttpClient, @Inject(String) nomeEntidade: string) {
    this.resourceUrl = `${environment.API_URL}/${nomeEntidade}`;
  }

  obterTodos(): Observable<any> {
    return this.http.get<any>(`${this.resourceUrl}/`);
  }

  obter(id: string): Observable<any> {
    return this.http.get<any>(`${this.resourceUrl}/${id}`);
  }

  filtrar(filtro: string, datasource: MatTableDataSource<any>): Observable<any> {
    return this.http.post<any>(
      this.resourceUrl + '/filtrar',
      { filtro: filtro },
      { params: RequestUtil.getRequestParams(datasource) },
    );
  }

  cria(instancia: any): Observable<any> {
    return this.http.post<any>(this.resourceUrl, instancia);
  }

  atualiza(instancia: any): Observable<any> {
    return this.http.put<any>(this.resourceUrl, instancia);
  }

  exclui(id: string): Observable<any> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`);
  }

  existe(id: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.resourceUrl}/${id}/exists`);
  }
}
