import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'sr-auth',
  template: require('./auth.component.pug'),
  styles: [ require('./auth.component.styl') ]
})
export class AuthComponent implements OnInit, OnDestroy {

  public isSingIn: boolean;
  public isSingUp: boolean;

  constructor(private route: ActivatedRoute, private authService: AuthService) {

  }

  public singIn(): void {
    this.authService.changeUrlFragment('sing-in')
  }

  public singUp(): void {
    this.authService.changeUrlFragment('sing-up')
  }

  ngOnInit() {
    this.route.fragment.subscribe((param: string) => {
      this.isSingIn = param === 'sing-in'
      this.isSingUp = param === 'sing-up'
    });
  }

  ngOnDestroy() {
    location.hash = '';
  }
}
