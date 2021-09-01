import { DsgovModule } from './dsgov/dsgov.module';
import { TabelaModule } from './shared/components/tabela/tabela.module';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './shared/core/core.module';
import { ErrorsModule } from './shared/errors';
import { MaterialModule } from './material.module';
import { DialogsModule } from './shared/components';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { DatePipe, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');
moment.locale('pt-BR');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ErrorsModule,
    MaterialModule,
    FlexLayoutModule,
    CoreModule,
    MatMomentDateModule,
    MatNativeDateModule,
    DialogsModule,
    TabelaModule,
    DsgovModule,
  ],
  providers: [
    DatePipe,
    {
      provide: LOCALE_ID,
      useValue: 'pt',
    },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
