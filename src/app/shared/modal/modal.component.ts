import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { OverlayService } from '../services/overlay.service';

@Component({
  selector: 'sr-modal',
  template: require('./modal.component.pug'),
  styles: [ require('./modal.component.styl') ]
})
export class ModalComponent implements OnInit {

  private _options = {
    footer: true
  }

  @HostBinding('class.without-footer') get isFooter() {
    return !this.options.footer;
  }

  @Input() set options(options: {footer: boolean}) {
    this._options = Object.assign(this._options, options);
  }

  get options() {
    return this._options;
  }

  public close(): void {
    this._overlayService.componentHide();
  }

  constructor(private _overlayService: OverlayService) {
  }

  ngOnInit() {
  }
}
