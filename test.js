"use strict";

import MergeSort from "./mergeSort.js";

window.addEventListener("load", start);

const arrToSort = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 100)
);
window.arrToSort = arrToSort;

function start() {
  console.log("Test script running...");
  mergeSortTest();
}

function mergeSortTest() {
  console.log("Merge Sort Test");
  const merge = new MergeSort(arrToSort);
  window.merge = merge;
}
