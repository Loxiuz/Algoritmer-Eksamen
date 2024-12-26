import Stack from "./stack.js";

export default class PatienceSort {
  #arrayToSort;

  constructor(arrayToSort) {
    this.#arrayToSort = arrayToSort;
  }

  sort() {
    console.log("original:", this.#arrayToSort);
    return this.makePiles();
  }

  makePiles() {
    const piles = [];

    this.#arrayToSort.forEach((element) => {
      let placed = false;

      for (let i = 0; i < piles.length; i++) {
        const pile = piles[i];
        if (pile.peek() >= element) {
          pile.push(element);
          placed = true;
          break;
        }
      }

      if (!placed) {
        const newPile = new Stack();
        newPile.push(element);
        piles.push(newPile);
      }
    });
    console.log(piles);
    return this.mergePiles(piles);
  }

  mergePiles(piles) {
    const sortedArray = [];
    let tempPeekArray = piles.map((pile) => pile.peek());

    while (tempPeekArray.some((element) => element !== undefined)) {
      let min = null;
      let minIndex = -1;

      for (let i = 0; i < tempPeekArray.length; i++) {
        if (
          tempPeekArray[i] !== undefined &&
          (min === null || tempPeekArray[i] < min)
        ) {
          min = tempPeekArray[i];
          minIndex = i;
        }
      }

      if (minIndex !== -1) {
        console.log(piles[minIndex]);
        sortedArray.push(piles[minIndex].pop());
        tempPeekArray[minIndex] = piles[minIndex].peek();
      }
    }

    return sortedArray;
  }
}
