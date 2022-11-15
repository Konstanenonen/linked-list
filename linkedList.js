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

  print() {
    console.log(this.#list);
  }
}
