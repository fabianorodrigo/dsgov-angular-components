import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsgovModule } from '../dsgov/dsgov.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, DsgovModule],
})
export class HomeModule {}
