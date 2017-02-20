import { SelectOption } from './select.type';
export interface ISelectModel {
  getValue(): string;
  setValue(value: (string | null)): boolean;
  getCurrentLabel(): string;
}

export interface ISelectModelConstructor {
  new (options: SelectOption[]): ISelectModel
}
