import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from '../ui/ui.module';

import { ModalComponent } from 'shared/modal/modal.component';
import { NotFoundComponent } from 'shared/not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    UiModule
  ],
  exports: [
    ModalComponent,
    NotFoundComponent
  ],
  declarations: [
    ModalComponent,
    NotFoundComponent
  ]
})
export class SharedModule {
}
