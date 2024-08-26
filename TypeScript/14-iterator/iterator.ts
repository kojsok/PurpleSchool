class Item {
    id: number;
    date: Date;
    title: string;
    constructor(id: number, date: Date, title: string) {
      this.id = id;
      this.date = date;
      this.title = title;
    }
  }
  
  class ItemList {
    private items: Item[] = [];
    public sortById() {
      this.items = this.items.sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        } else if (a.id = b.id) {
          return 0;
        } else {
          return -1;
        }
      })
    }
  
    public sortByData() {
      this.items = this.items.sort((a, b) => {
        if (a.date > b.date) {
          return 1;
        } else if (a.date = b.date) {
          return 0;
        } else {
          return -1;
        }
      })
    }
  
    public addItem(item: Item) {
      this.items.push(item);
    }
  
    public getItem() {
      return this.items
    }
  
    public count() {
      return this.items.length;
    }
  
    public getIteratorId() {
      return new IdItemIterator(this);
    }
  
    public getIteratorDate() {
      return new DateItemIterator(this);
    }
  }
  
  interface IIterator<T> {
    current(): T | undefined;
    next(): T | undefined;
    prev(): T | undefined;
    index(): number;
  }
  
  class IdItemIterator implements IIterator<Item> {
    private position: number = 0;
    private itemList: ItemList;
    constructor(itemList: ItemList) {
      itemList.sortById();
      this.itemList = itemList;
    }
    current(): Item | undefined {
      return this.itemList.getItem()[this.position];
    }
    next(): Item | undefined {
      this.position += 1;
      return this.itemList.getItem()[this.position];
    }
    prev(): Item | undefined {
      this.position -= 1;
      return this.itemList.getItem()[this.position];
    }
    index(): number {
      return this.position;
    }
  }
  
  class DateItemIterator implements IIterator<Item> {
    private position: number = 0;
    private itemList: ItemList;
    constructor(itemList: ItemList) {
      itemList.sortByData();
      this.itemList = itemList;
    }
    current(): Item | undefined {
      return this.itemList.getItem()[this.position];
    }
    next(): Item | undefined {
      this.position += 1;
      return this.itemList.getItem()[this.position];
    }
    prev(): Item | undefined {
      this.position -= 1;
      return this.itemList.getItem()[this.position];
    }
  
    index(): number {
      return this.position;
    }
  }