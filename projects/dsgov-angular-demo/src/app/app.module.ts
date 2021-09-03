import { DsgovModule } from './dsgov/dsgov.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DsgovModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
