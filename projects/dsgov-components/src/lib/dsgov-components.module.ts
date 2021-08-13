import { NgModule } from '@angular/core';
import { BreadcrumbModule } from './components/breadcrumb/breadcrumb.module';
import { ButtonModule } from './components/button/button.module';

@NgModule({
  declarations: [],
  imports: [ButtonModule, BreadcrumbModule],
  exports: [ButtonModule, BreadcrumbModule],
})
export class DsgovComponentsModule {}
