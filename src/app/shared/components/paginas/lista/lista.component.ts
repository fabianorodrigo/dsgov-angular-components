import { Component, Inject, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { catchError, debounceTime, finalize } from 'rxjs/operators';
import { AuthService, DataService, EntidadeDadosBasica } from 'src/app/shared/core';
import { AcaoEnum } from 'src/app/shared/enums';
import { environment } from 'src/environments/environment';
import { Coluna } from './../../tabela/coluna';
import { BasicaComponent } from './../basica/basica.component';

@Component({
  selector: 'br-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export abstract class ListaComponent extends BasicaComponent implements OnInit {
  filtro: string = '';
  debouncePesquisa: Subject<string> = new Subject<string>();

  dataSource: MatTableDataSource<any>;
  colunas: Coluna[];
  urlRota: string;

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  tamanhoPagina = environment.TABLE_TAMANHO_PAGINA_DEFAULT;
  indicePaginaServidor = 0; //as páginas no backend são fixas, geralmente maiores que no clientside que pode inclusive ficar mudando
  indicePaginaCliente = 0; //indice da página sendo exibida na tabela

  constructor(
    private router: Router,
    private authenticationService: AuthService,
    private service: DataService,
    @Inject(String) rotaEntidade: string,
  ) {
    super();
    this.urlRota = rotaEntidade;
  }

  ngOnInit(): void {
    //com o pipe(debounceTime(x)), só passa pra função  do subscribe depois de um intervalo dox X milisegundos
    //OBS: Ao contrário do Observable, o Subject nunca completa. Fica ativo eternamente, portanto,
    //é necessário deinscrever quando não for mais necessário
    this.debouncePesquisa.pipe(debounceTime(500)).subscribe(textoProcurado => {
      this.filtro = textoProcurado;
      this.pesquisa();
    });

    if (this.dataSource == undefined) {
      this.dataSource = new MatTableDataSource<any>([]);
    }
  }

  pesquisa() {
    if (this.filtro.trim() != '') {
      //report that some data is being loaded SOMENTE SE FOR A PÁGINA ZERO
      if (this.indicePaginaServidor == 0) this.loadingSubject.next(true);
      //this.dataSource.carrega(this.filtro, 0, DATASOURCE_TAMANHO_PAGINA_DEFAULT);
      this.service
        .filtrar(this.filtro, this.dataSource)
        .pipe(
          //if an error in the HTTP request occurs we are going to return an Observable that emits the
          //empty array using 'of'
          catchError(this.catchError),
          //wether the call to the backend succeeds or fails, we will in both cases have the loading$ Observable emit false
          finalize(() => {
            this.loadingSubject.next(false);
          }),
        )
        .subscribe(pessoas => {
          this.dataSource.data =
            this.indicePaginaServidor == 0 ? pessoas : (this.dataSource.data = this.dataSource.data.concat(pessoas));
        });
    }
  }

  visualiza(entidade: EntidadeDadosBasica) {
    this.router.navigate([this.urlRota, AcaoEnum.VISUALIZAR, entidade.id]);
  }
}
