import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ErrorReportingService } from '../services/error-reporting.service';

@Component({
  selector: 'sr-not-found',
  template: require('./not-found.component.pug'),
  styles: [ require('./not-found.component.styl') ],
  providers: [ ErrorReportingService ]
})
export class NotFoundComponent implements OnInit {

  constructor(private route: ActivatedRoute, private errorReportingService: ErrorReportingService) {
  }

  ngOnInit() {
    this.errorReportingService.sendReport(this.route.snapshot);
  }
}
