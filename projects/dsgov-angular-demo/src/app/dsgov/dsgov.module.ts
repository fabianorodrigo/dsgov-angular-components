import { NgModule } from '@angular/core';
import {
  ButtonModule,
  BreadcrumbModule,
  MenuModule,
  FooterModule,
  HeaderModule,
  SigninModule,
  InputModule,
} from 'projects/dsgov-components/src/public-api';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    BreadcrumbModule,
    InputModule,
    MenuModule,
    FooterModule,
    HeaderModule,
    SigninModule,
  ],
  exports: [
    ButtonModule,
    BreadcrumbModule,
    MenuModule,
    FooterModule,
    HeaderModule,
    InputModule,
    SigninModule,
  ],
})
export class DsgovModule {}
