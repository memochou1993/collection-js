import {
  map,
  filter,
  reduce,
} from './modules';

class Collection {
  private items;

  constructor(items: Array<any> = []) {
    this.items = items;
  }

  map(callable: Function) {
    this.items = map(this.items, callable);
    return this;
  }

  filter(callable: Function) {
    this.items = filter(this.items, callable);
    return this;
  }

  reduce(callable: Function, init: any) {
    return reduce(this.items, callable, init);
  }

  toArray() {
    return this.items;
  }
}

const collect = (items: Array<any>): Collection => new Collection(items);

export {
  collect,
};
