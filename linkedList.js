class Node {
  #value = null;
  nextNode = null;

  constructor(value) {
    this.#value = value;
  }

  value() {
    return this.#value;
  }
}

class LinkedList {
  #list = null;

  append(value) {
    if (this.#list === null) {
      this.#list = new Node(value);
      return;
    }

    for (let node = this.#list; node !== null; node = node.nextNode) {
      if (node.nextNode === null) {
        node.nextNode = new Node(value);
        return;
      }
    }
  }

  prepend(value) {
    const firstNode = new Node(value);
    firstNode.nextNode = this.#list;
    this.#list = firstNode;
  }

  size() {
    if (this.#list === null) return 0;

    let count = 0;
    for (let node = this.#list; node !== null; node = node.nextNode) {
      count = count + 1;
    }
    return count;
  }

  head() {
    return this.#list;
  }

  tail() {
    for (let node = this.#list; node !== null; node = node.nextNode) {
      if (node.nextNode === null) {
        return node;
      }
    }
  }

  print() {
    console.log(this.#list);
  }
}

const list = new LinkedList();
list.append(1);
list.prepend(2);
list.append(3);
list.prepend(4);
list.size();
list.head();
list.tail();
