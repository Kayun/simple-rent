import { IModel, IModelConstructor } from '../model/model-interface';
import { ICollection } from './collection-interface';
import { isIModel } from '../model/model-guard';
import { Helper } from '../helper';

export abstract class Collection<T, E extends IModel<T>> implements ICollection<T, E> {

  protected collection: E[] = [];

  constructor(private Model: IModelConstructor<T, E>, models?: T[] | E[]) {
    if (models) {
      for (let model of models) {
        this.add(model);
      }
    }
  }

  public add<E>(model: E): boolean;
  public add<T>(attributes: T): boolean;
  public add(argument: E | T): boolean {

    if (isIModel<T>(argument)) {
      this.collection.push(argument);
    } else {
      this.collection.push(new this.Model(argument, Helper.idGenerate))
    }

    return true;
  }

  public remove<E>(item: E): boolean;
  public remove(id: string): boolean;
  public remove(argument: any): boolean {
    let index = this.findIndexById(isIModel<T>(argument) ? argument.id : argument);

    if (index === -1) {
      return false;
    }

    this.collection.splice(index, 1);

    return true;
  }

  public findById(id: string): E {
    let index = this.findIndexById(id);

    if (index === -1) {
      return null;
    }

    return this.collection[index];
  }

  public findByIndex(index: number): E {
    let model = this.collection[index];

    if (!model) {
      return null;
    }

    return model;
  }

  public size(): number {
    return this.collection.length;
  }

  protected findIndexByAttribute<K extends keyof T>(key: K, value: T[K]): number {
    return this.collection.findIndex((item: E) => {
      return item.get(key) === value;
    });
  }

  protected findIndexById(id: string): number {
    return this.collection.findIndex((item: E) => {
      return item.id === id;
    });
  }

  [Symbol.iterator]() {
    let index = 0;
    let that = this;

    return {
      next(): IteratorResult<E> {

        let value: E = that.collection[ index ];
        index++;

        return <IteratorResult<E>> {
          done: value === undefined,
          value
        }
      }
    }
  }
}

