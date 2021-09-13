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
  TooltipModule,
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
    TooltipModule,
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
    TooltipModule,
  ],
})
export class DsgovModule {}
