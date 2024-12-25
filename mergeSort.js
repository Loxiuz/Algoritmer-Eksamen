import SinglyLinkedList from "./singlylinkedlist.js";

export default class MergeSort {
  #linkedList;

  constructor(arrayToSort) {
    this.#linkedList = new SinglyLinkedList();

    arrayToSort.forEach((element) => {
      this.#linkedList.add({ data: element, next: null });
    });
  }

  sort() {
    const sortedList = this.#mergeSort(this.#linkedList);
    console.log("original:", this.#toArray(this.#linkedList));
    return this.#toArray(sortedList);
  }

  #mergeSort(linkedList) {
    const listLength = linkedList.size();

    if (listLength <= 1) {
      return linkedList;
    }

    let left = new SinglyLinkedList();
    let right = new SinglyLinkedList();

    for (let i = 0; i < listLength; i++) {
      const node = linkedList.getNode(i);
      const newNode = { data: node.data, next: null };

      if (i < listLength / 2) {
        left.add(newNode);
      } else {
        right.add(newNode);
      }
    }

    left = this.#mergeSort(left);
    right = this.#mergeSort(right);

    return this.#merge(left, right);
  }

  #merge(left, right) {
    let result = new SinglyLinkedList();

    while (left.size() > 0 && right.size() > 0) {
      const leftFirst = left.getFirstNode();
      const rightFirst = right.getFirstNode();
      if (leftFirst.data <= rightFirst.data) {
        result.add({ data: leftFirst.data, next: null });
        left.removeFirstNode();
      } else {
        result.add({ data: rightFirst.data, next: null });
        right.removeFirstNode();
      }
    }

    while (left.size() > 0) {
      const leftFirst = left.getFirstNode();
      result.add({ data: leftFirst.data, next: null });
      left.removeFirstNode();
    }
    while (right.size() > 0) {
      const rightFirst = right.getFirstNode();
      result.add({ data: rightFirst.data, next: null });
      right.removeFirstNode();
    }
    return result;
  }

  #toArray(list) {
    const arr = [];
    let current = list.getFirstNode();

    while (current) {
      arr.push(current.data);
      current = current.next;
    }

    return arr;
  }
}
