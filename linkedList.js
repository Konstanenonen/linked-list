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

  at(index) {
    let node = this.#list;

    for (let i = 0; i <= index; i = i + 1) {
      if (i === index) return node;
      if (node.nextNode === null) return;

      node = node.nextNode;
    }
  }

  pop() {
    if (this.#list === null) return;
    if (this.#list.nextNode === null) {
      this.#list = null;
      return;
    }

    for (let node = this.#list; node !== null; node = node.nextNode) {
      if (node.nextNode.nextNode === null) {
        node.nextNode = null;
      }
    }
  }

  contains(value) {
    for (let node = this.#list; node !== null; node = node.nextNode) {
      if (node.value() === value) return true;
    }
    return false;
  }

  find(value) {
    let index = -1;
    for (let node = this.#list; node !== null; node = node.nextNode) {
      index = index + 1;
      if (node.value() === value) return index;
    }
    return null;
  }

  toString() {
    let finalString = '';
    for (let node = this.#list; node !== null; node = node.nextNode) {
      finalString += `( ${node.value()} ) -> `;
      if (node.nextNode === null) {
        finalString += 'null';
      }
    }
    return finalString;
  }
}

const list = new LinkedList();
list.append('one');
list.append('two');
list.append('three');
list.append('four');
list.append('five');
list.toString();
