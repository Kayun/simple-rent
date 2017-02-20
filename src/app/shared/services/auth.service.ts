import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {

  private fragmentSubject = new Subject<string>()

  public fragment = this.fragmentSubject.asObservable()

  constructor(private route: ActivatedRoute) {
    route.fragment.subscribe((param: string) => {
      if (param === 'sing-in' || param === 'sing-up') {
        this.fragmentSubject.next(param)
      }
    });
  }

  public changeUrlFragment(fragment: string): void {
    location.hash = `#${fragment}`;
  }
}
