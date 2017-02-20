import { SelectOption, SelectModelOption } from './select.type';
import { ISelectModel } from './select.interface';

export class SelectModel {

  private options: SelectModelOption[]
  private currentOption: SelectModelOption = null

  constructor(options: SelectOption[], idGenerator: any) {
    this.options = options.map((option) => {
      let serviceOption = {
        id: idGenerator(),
        selected: false
      }

      return Object.assign(option, serviceOption)
    });
  }

  getCurrentLabel(): string {
    if (this.currentOption) {
      return this.currentOption.label;
    }

    return null;
  }

  getValue(): string {
    return this.currentOption.value;
  }

  setValue(value: (string | null)): boolean {
    if (value === null) {
      this.currentOption = null;
      return true;
    }

    let current = this.options.find(option => option.value === value);

    if (current) {
      this.currentOption =  current;
      this.currentOption.selected = true;
      return true;
    }

    return false;
  }

  getOptions(): SelectModelOption[] {
    return this.options;
  }
}
