import { NgModule } from '@angular/core';
import {
  ButtonModule,
  BreadcrumbModule,
  DividerModule,
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
    DividerModule,
    InputModule,
    MenuModule,
    FooterModule,
    HeaderModule,
    SigninModule,
  ],
  exports: [
    ButtonModule,
    BreadcrumbModule,
    DividerModule,
    MenuModule,
    FooterModule,
    HeaderModule,
    InputModule,
    SigninModule,
  ],
})
export class DsgovModule {}
