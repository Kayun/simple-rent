import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from 'shared/not-found/not-found.component';

import { MainComponent } from './main.component';

const mainRouter: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRouter)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {};
