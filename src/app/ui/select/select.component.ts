import {
  Component, OnInit, OnDestroy, Input, Renderer, OnChanges, ElementRef, AfterContentInit, AfterContentChecked,
  ContentChild
} from '@angular/core';
import { SelectOption } from './select.type';
import { SelectModel } from './select.model';
import { NgControl, NgModel } from '@angular/forms';
import { Helper } from '../../shared/classes/helper';

@Component({
  selector: 'sr-select',
  template: require('./select.component.pug'),
  styles: [ require('./select.component.styl') ]
})
export class SelectComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit, AfterContentChecked {

  @Input() options: SelectOption[] = []
  @Input() placeholder: string = ''

  @ContentChild(NgControl) selectControl: NgModel
  @ContentChild('select') select: ElementRef

  private isOpen: boolean = false

  private currentValue: string

  public model: SelectModel

  constructor(private renderer: Renderer, private element: ElementRef) {
  }

  onSelectChange(event: any) {
    console.log(event);
    this.model.setValue(this.selectControl.model);
  }

  ngAfterContentInit() {
    this.select = this.element.nativeElement.querySelector('select');
    this.renderer.listen(this.select, 'change', this.onSelectChange.bind(this));
  }

  ngAfterContentChecked() {
  }

  ngOnInit() {
    this.model = new SelectModel(this.options, () => {});
    this.model.setValue('5');
    console.log(this.select);
  }

  ngOnChanges() {
  }

  ngOnDestroy() {
  }
}
