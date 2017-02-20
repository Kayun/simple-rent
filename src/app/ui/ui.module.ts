import { NgModule } from '@angular/core';
import { InputComponent } from './input/input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PasswordComponent } from './password/password.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { SelectComponent } from './select/select.component';
import { SelectDirective } from './select/select.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputComponent,
    PasswordComponent,
    CheckboxComponent,
    RadioComponent,
    // SelectComponent,
    // SelectDirective
  ],
  declarations: [
    InputComponent,
    PasswordComponent,
    CheckboxComponent,
    RadioComponent,
    // SelectComponent,
    // SelectDirective
  ]
})
export class UiModule {
}
