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

    let node = this.#list;

    while (true) {
      if (node.nextNode === null) {
        node.nextNode = new Node(value);
        break;
      }
      node = node.nextNode;
    }
  }

  print() {
    console.log(this.#list);
  }
}
