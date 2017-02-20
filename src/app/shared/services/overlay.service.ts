import { Observable, Subject } from 'rxjs';
import { Component, Type } from '@angular/core';

export class OverlayService {

  private _subjectShow = new Subject<Type<Component>>();

  private _subjectHide = new Subject<boolean>();

  public overlayShow: Observable<Type<Component>> = this._subjectShow.asObservable();

  public overlayHide: Observable<boolean> = this._subjectHide.asObservable();

  public currentType: (null | Type<Component>) = null

  constructor() {
  }

  public componentShow(type: Type<Component>): void {
    this._subjectShow.next(type);
  }

  public componentHide(): void {
    this._subjectHide.next(true);
  }
}
