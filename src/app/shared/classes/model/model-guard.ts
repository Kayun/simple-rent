import { IModel } from './model-interface';

export function isIModel<T>(model: any): model is IModel<T> {
  return model.getAttributes !== undefined;
}
