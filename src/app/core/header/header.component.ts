import { Component, OnInit, OnDestroy } from '@angular/core';
import { LangService } from '../../shared/services';
import { Subscription } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'sr-header',
  template: require('./header.component.pug'),
  styles: [ require('./header.component.styl') ]
})
export class HeaderComponent implements OnInit, OnDestroy {
  public lang: any;

  private _langServiceSubscription: Subscription;

  constructor(private _langService: LangService, private _authService: AuthService) {
  }

  public singIn(): void {
    this._authService.changeUrlFragment('sing-in')
  }

  public singUp(): void {
    this._authService.changeUrlFragment('sing-up')
  }

  ngOnInit() {
    this._langServiceSubscription = this._langService.json.subscribe(({header}) => this.lang = header);
  }

  ngOnDestroy() {
    this._langServiceSubscription.unsubscribe();
  }
}
