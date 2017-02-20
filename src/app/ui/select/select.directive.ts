
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSelect]'
})
export class SelectDirective {

  // @Input()
  // public set appSelect(templateRef: TemplateRef<HTMLSelectElement>) {
  //   let select = this.viewContainerRef.createEmbeddedView(templateRef)
  //   console.log(select);
  // }

  constructor(private viewContainerRef: ViewContainerRef) {
    console.log(viewContainerRef);
  }
}
