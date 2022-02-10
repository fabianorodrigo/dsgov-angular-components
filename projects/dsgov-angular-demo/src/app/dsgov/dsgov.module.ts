import { NgModule } from '@angular/core';
import { RadioModule } from 'projects/dsgov-components/src/lib/components/radio/radio.module';
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
} from 'projects/dsgov-components/src/public-api';

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
    RadioModule,
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
    RadioModule,
  ],
})
export class DsgovModule {}
