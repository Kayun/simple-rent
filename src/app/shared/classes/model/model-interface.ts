export interface IModel<T> {
  readonly id: string;
  get<E extends keyof T>(attributeName: E): T[E];
  getAttributes(): T;
  set<E extends keyof T>(attributeName: E, attributeValue: T[E]): void
}

export interface IModelConstructor<T, E> {
  new(attributes: T, idGenerator: IIdGenerator): E
}

export interface IIdGenerator {
  (idLength?: number): string
}

