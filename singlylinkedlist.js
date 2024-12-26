export default class SinglyLinkedList {
  #head;
  #tail;
  #length;

  constructor() {
    this.clear();
  }

  add(node) {
    if (!this.#head) {
      this.#head = node;
      this.#tail = this.#head;
    } else {
      this.#tail.next = node;
      this.#tail = node;
    }
    this.#length++;
    return this;
  }

  getFirstNode() {
    return this.#head;
  }

  getNextNode(node) {
    return node.next;
  }

  //Show list in console
  dumpList() {
    let node = this.#head;
    while (node !== null) {
      console.log(node);
      node = this.getNextNode(node);
    }
  }

  removeFirstNode() {
    if (this.#length !== 0) {
      this.#head = this.getNextNode(this.#head);
      this.#length--;
    } else {
      console.log("List empty");
    }
  }

  removeLastNode() {
    if (this.#length !== 0) {
      if (this.#length === 1) {
        this.#head = null;
        this.#tail = null;
      } else if (this.#length === 2) {
        this.#head.next = null;
        this.#tail = this.#head;
      } else {
        let node = this.#head;
        while (node.next.next !== null) {
          console.log(node);
          node = node.next;
        }
        node.next = null;
        this.#tail = node;
      }
      console.log("Tail:", this.#tail);
      this.#length--;
    } else {
      console.log("List empty");
    }
  }

  removeNode(node) {
    if (this.#length !== 0) {
      if (this.#head === node) {
        console.log("The node was the head!");
        this.#head = this.#head.next;
        if (this.#length === 1) {
          this.#tail = null;
        }
        this.#length--;
      } else {
        let pn = null; //Previous Node
        let cn = this.#head; //Current Node

        while (cn !== null) {
          if (cn === node) {
            console.log("Node found!");
            pn.next = cn.next;
            if (cn === this.#tail) {
              this.#tail = pn;
            }
            this.#length--;
            return;
          }
          console.log("Not this node...");
          pn = cn;
          cn = cn.next;
        }
      }
    } else {
      console.log("List empty");
    }
  }

  getLastNode() {
    return this.#tail;
  }

  getNodeWith(data) {
    if (this.#length !== 0) {
      let node = this.#head;
      while (node !== null) {
        if (node.data === data) {
          console.log("Node with correct data found!");
          return node;
        }
        console.log("Not this node...");
        node = node.next;
      }
    } else {
      console.log("List empty");
    }
  }

  getNode(i) {
    let index = 0;
    if (this.#length !== 0) {
      let node = this.#head;
      while (index < this.#length) {
        if (index === i) {
          return node;
        }
        node = node.next;
        index++;
      }
    } else {
      console.log("list empty");
    }
  }

  size() {
    return this.#length;
  }

  remove(data) {
    this.removeNode(this.getNodeWith(data));
  }

  clear() {
    this.#head = null;
    this.#tail = null;
    this.#length = 0;
  }
}
