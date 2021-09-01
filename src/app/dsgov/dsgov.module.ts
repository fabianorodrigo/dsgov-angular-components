import { NgModule } from '@angular/core';
import { ButtonModule, BreadcrumbModule, MenuModule, FooterModule, HeaderModule, SigninModule } from 'dsgov-components';

@NgModule({
  declarations: [],
  imports: [ButtonModule, BreadcrumbModule, MenuModule, FooterModule, HeaderModule, SigninModule],
  exports: [ButtonModule, BreadcrumbModule, MenuModule, FooterModule, HeaderModule, SigninModule],
})
export class DsgovModule {}
