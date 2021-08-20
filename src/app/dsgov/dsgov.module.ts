import { NgModule } from '@angular/core';
import { ButtonModule, BreadcrumbModule, MenuModule, FooterModule } from 'dsgov-components';

@NgModule({
  declarations: [],
  imports: [ButtonModule, BreadcrumbModule, MenuModule, FooterModule],
  exports: [ButtonModule, BreadcrumbModule, MenuModule, FooterModule],
})
export class DsgovModule {}
