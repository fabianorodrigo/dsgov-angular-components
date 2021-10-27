import { NgModule } from '@angular/core';
import {
  BaseModule,
  ButtonModule,
  BreadcrumbModule,
  DividerModule,
  MenuModule,
  FooterModule,
  HeaderModule,
  SigninModule,
  InputModule,
  TooltipModule,
} from 'dsgov-components';

@NgModule({
  declarations: [],
  imports: [
    BaseModule,
    ButtonModule,
    BreadcrumbModule,
    DividerModule,
    InputModule,
    MenuModule,
    FooterModule,
    HeaderModule,
    SigninModule,
    TooltipModule,
  ],
  exports: [
    BaseModule,
    ButtonModule,
    BreadcrumbModule,
    DividerModule,
    MenuModule,
    FooterModule,
    HeaderModule,
    InputModule,
    SigninModule,
    TooltipModule,
  ],
})
export class DsgovModule {}
