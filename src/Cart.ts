import Buyable from './Buyable';

export default class Cart {
  private _items: Buyable[] = [];
  
  add(item: Buyable): void {
    const idxItem: number = this._items.findIndex(el => el.id === item.id);
    if (idxItem === -1) {
      this._items.push(item);
    } else {
      if (!this._items[idxItem].electronicProduct) {
        this._items[idxItem].count += 1;
      }
    }
  }
  
  get items(): Buyable[] {
    return [...this._items];
  }
  
  reduce(id: number): void {
    const idx = this._items.findIndex(item => item.id === id);
    if (this._items[idx].count) {
      this._items[idx].count -= 1;
      if (this._items[idx].count === 0) {
        this.remove(id);
      }
    }
  }
  
  remove(id: number): void {
    this._items.splice(this._items.findIndex(item => item.id === id), 1);
  }
}
