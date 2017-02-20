import { Component, OnInit } from '@angular/core';
import { LangService, OverlayService, AuthService } from 'shared/services';
import { Helper } from 'shared/classes/helper';

@Component({
  selector: 'sr-main',
  template: require('./main.component.pug'),
  styles: [ require('./main.component.styl') ],
  providers: [ LangService, OverlayService, AuthService ]
})
export class MainComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
