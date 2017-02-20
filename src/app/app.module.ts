import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { UiModule } from './ui/ui.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';

import { AppComponent } from './app.component';
import { Helper, HELPER_STATIC_CLASS } from './shared/classes/helper';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UiModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    SharedModule,
    MainModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    {
      provide: HELPER_STATIC_CLASS,
      useValue: Helper
    }
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
