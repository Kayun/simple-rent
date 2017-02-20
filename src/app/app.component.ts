import { Component, OnInit } from '@angular/core';
import { LangService, OverlayService, AuthService } from 'shared/services';
import { AuthComponent } from 'auth/auth.component';

@Component({
  selector: 'sr-root',
  template: require('./app.component.pug'),
  styles: [ require('./app.component.styl') ],
  providers: [ LangService, OverlayService, AuthService ]
})
export class AppComponent implements OnInit {
  constructor(private langService: LangService,
              private authService: AuthService,
              private overlayService: OverlayService) {
  }

  ngOnInit() {
    this.langService.setLang(navigator.language);

    this.authService.fragment.subscribe(fragment => {
      if (!(AuthComponent === this.overlayService.currentType)) {
        this.overlayService.componentShow(AuthComponent)
      }
    });
  }
}
