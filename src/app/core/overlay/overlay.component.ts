import {
  Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, HostBinding, HostListener,
  ElementRef, OnDestroy
} from '@angular/core';
import { OverlayService } from '../../shared/services/overlay.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sr-overlay',
  template: require('./overlay.component.pug'),
  styles: [ require('./overlay.component.styl') ]
})
export class OverlayComponent implements OnInit, OnDestroy {

  private _cmpRef: ComponentRef<Component>;
  private _showSubscription: Subscription;
  private _hideSubscription: Subscription;

  @ViewChild('overlayInner', { read: ViewContainerRef }) inner: ViewContainerRef;

  @HostBinding('class.is-visible') isVisible = false;

  @HostListener('click') outClick(): void {
    this.close();
  }

  public close(): void {
    let host = this._host.nativeElement;

    let handler = () => {
      if (this._cmpRef) {
        this._cmpRef.destroy();
      }

      this._cmpRef = null;
      host.removeEventListener('transitionend', handler, false)
    }

    host.addEventListener('transitionend', handler, false);

    this.isVisible = false;
    this._overlayService.currentType = null;
  }

  constructor(private _overlayService: OverlayService, private _resolve: ComponentFactoryResolver, private _host: ElementRef) {
    this._showSubscription = this._overlayService.overlayShow.subscribe(type => {
      if (this._cmpRef) {
        this._cmpRef.destroy();
      }

      let cmpFactory = _resolve.resolveComponentFactory(type);
      this._cmpRef = this.inner.createComponent(cmpFactory);
      this.isVisible = true;
      this._overlayService.currentType = type;
    });

    this._hideSubscription = _overlayService.overlayHide.subscribe(hide => {
      if (hide) {
        this.close();
      }
    })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._showSubscription.unsubscribe();
    this._hideSubscription.unsubscribe();
  }
}
