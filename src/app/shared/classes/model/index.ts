import { IModel, IIdGenerator } from './model-interface';

export abstract class Model<T> implements IModel<T> {

  public readonly id: string

  protected attributes: T;

  constructor(attributes: T, idGenerator: IIdGenerator) {
    this.attributes = attributes;
    this.id = idGenerator();
  }

  public get<E extends keyof T>(attributeName: E): T[E] {
    return this.attributes[ attributeName ];
  }

  public set<E extends keyof T>(attributeName: E, attributeValue: T[E]): void {
    this.attributes[ attributeName ] = attributeValue;
  }

  public getAttributes(): T {
    return this.attributes;
  }
}

