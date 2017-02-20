export interface ICollection<T, E> extends Iterable<E> {
  add(item: E): boolean;
  remove(Item: E): boolean
  size(): number;
}

export interface ICollectionConstructor<T, E> {
  new(Model: E, models?: T[] | E[]): ICollection<T, E>
}


