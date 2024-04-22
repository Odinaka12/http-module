class Nodes {
  public value: number;
  public next: Nodes | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class Linked {
  public head: Nodes | null;
  public tail: Nodes | null;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addDataFromBack(value: number) {
    let node = new Nodes(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  addDataFromFront(value: number) {
    let node = new Nodes(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  removeDataFromBack() {
    if (!this.head) return undefined;

    let current: any = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail!.next = null;

    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  removeDataFromFront() {
    if (!this.head) return undefined;

    let current = this.head;
    this.head = current.next;

    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }

  getFromIndex(index: number) {
    if (index < 0 || index > this.length) return undefined;

    let count: number = 0;
    let current: any = this.head;

    while (count !== index) {
      current = current.next;
      count++;
    }

    return current;
  }

  changeValue(index: number, value: number) {
    if (index < 0 || index > this.length) return undefined;

    let data = this.getFromIndex(index);

    data.value = value;

    return data;
  }

  insertDataInBetween(index: number, value: number) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.addDataFromFront(value);
    if (index === this.length) return !!this.addDataFromBack(value);

    let node = new Nodes(value);
    let prev = this.getFromIndex(index - 1);
    let temp = prev.next;

    prev.next = node;
    node.next = temp;

    this.length++;
    return true;
  }

  removeDataInBetween(index: number) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.removeDataFromFront();
    if (index === this.length) return !!this.removeDataFromBack();

    let prev = this.getFromIndex(index - 1);
    let temp = prev.next;

    prev.next = temp.next;

    this.length--;
    return true;
  }

  startFromBack() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next: Nodes | null;
    let prev: Nodes | null = null;

    for (let i = 0; i < this.length; i++) {
      next = node!.next;
      node!.next = prev;

      prev = node;
      node = next;
    }

    return this;
  }

  printListData() {
    let arr: number[] = [];
    let current = this.head;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

console.clear();

let linked = new Linked();
linked.addDataFromBack(6);
linked.addDataFromBack(7);
linked.addDataFromBack(8);
linked.addDataFromBack(3);

linked.addDataFromBack(5);

linked.addDataFromFront(1);

linked.removeDataFromBack();

linked.removeDataFromFront();
linked.removeDataFromFront();

console.log(linked);
console.log(linked.printListData());
console.log(linked.getFromIndex(1));
linked.changeValue(1, 20);
console.log();

linked.insertDataInBetween(2, 11);
linked.removeDataInBetween(2);
linked.removeDataInBetween(1);

console.log(linked.printListData());
linked.startFromBack();
console.log(linked.printListData());

// let arr: number[] = [6, 7, 0, 8, 3];
// // arr.pop();
// console.log(arr[1]);
// arr[1] = 10;
// console.log(arr[1]);

// let name24: string = "yuy";
// let numb: number = 90;
// let nullVal = null;
// let numbArr: {} = {};
// console.clear();
