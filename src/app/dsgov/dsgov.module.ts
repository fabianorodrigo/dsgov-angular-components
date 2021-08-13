import { NgModule } from '@angular/core';
import { ButtonModule, BreadcrumbModule, MenuModule } from 'dsgov-components';

@NgModule({
  declarations: [],
  imports: [ButtonModule, BreadcrumbModule, MenuModule],
  exports: [ButtonModule, BreadcrumbModule, MenuModule],
})
export class DsgovModule {}
