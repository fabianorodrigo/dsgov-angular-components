import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '../button/button.module';
import { DividerModule } from '../divider/divider.module';
import { SigninModule } from './../signin/signin.module';
import { HeaderActionsComponent } from './header-actions/header-actions.component';
import { HeaderBottomComponent } from './header-bottom/header-bottom.component';
import { HeaderFunctionsComponent } from './header-functions/header-functions.component';
import { HeaderLinksComponent } from './header-links/header-links.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { HeaderSearchTriggerComponent } from './header-search-trigger/header-search-trigger.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderLogoComponent,
    HeaderActionsComponent,
    HeaderLinksComponent,
    HeaderFunctionsComponent,
    HeaderSearchTriggerComponent,
    HeaderLoginComponent,
    HeaderBottomComponent,
  ],
  imports: [CommonModule, DividerModule, SigninModule, ButtonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
