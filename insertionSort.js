export default class InsertionSort {
  #arrayToSort;

  constructor(arrayToSort) {
    this.#arrayToSort = arrayToSort;
  }

  sort() {
    console.log("original:", this.#arrayToSort);

    const sortedArray = this.#arrayToSort;

    let i = 0;
    while (i < sortedArray.length) {
      let j = i;
      while (j > 0 && sortedArray[j - 1] > sortedArray[j]) {
        const temp1 = sortedArray[j];
        const temp2 = sortedArray[j - 1];

        sortedArray[j] = temp2;
        sortedArray[j - 1] = temp1;

        j--;
      }
      i++;
    }
    return sortedArray;
  }
}
