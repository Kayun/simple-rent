import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';
import { UiModule } from '../ui/ui.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    SharedModule
  ],
  declarations: [
    AuthComponent
  ],
  entryComponents: [ AuthComponent ]
})
export class AuthModule {
}
