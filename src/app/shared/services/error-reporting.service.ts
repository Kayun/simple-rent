import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ErrorReportingService {

  constructor(private http: Http) {}

  public sendReport(routeSnapshot: ActivatedRouteSnapshot): void {
    console.log(routeSnapshot);
  }
}
