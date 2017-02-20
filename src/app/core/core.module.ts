import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { OverlayComponent } from './overlay/overlay.component';

@NgModule({
  imports: [
    RouterModule.forChild([])
  ],
  exports: [
    HeaderComponent,
    OverlayComponent
  ],
  declarations: [
    HeaderComponent,
    OverlayComponent
  ]
})
export class CoreModule {
}

