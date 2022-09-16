import {
  map,
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

  toArray() {
    return this.items;
  }
}

const collect = (items: Array<any>): Collection => new Collection(items);

export {
  collect,
};
