import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'uiw-password',
  template: require('./password.component.pug'),
  styles: [ require('./password.component.styl') ]
})
export class PasswordComponent extends InputComponent {

  public type: string = 'password'

  constructor() {
    super();
  }

  public toggleType(type: string, input: HTMLInputElement): void {
    this.type = type;
    input.focus();
  }
}
