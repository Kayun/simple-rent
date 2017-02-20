import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.component';
import { MainComponent } from './main.component';
import { UiModule } from '../ui/ui.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainPanelComponent } from './panel/panel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule,
    UiModule
  ],
  declarations: [
    MainComponent,
    MainPanelComponent
  ]
})
export class MainModule {
}
