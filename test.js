"use strict";

import InsertionSort from "./insertionSort.js";
import MergeSort from "./mergeSort.js";
import PatienceSort from "./patienceSort.js";

window.addEventListener("load", start);

const arrToSort = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 100)
);
window.arrToSort = arrToSort;

function start() {
  console.log("Test script running...");
  mergeSortTest();
  insertionSortTest();
  PatienceSortTest();
}

function mergeSortTest() {
  console.log("Merge Sort Test");
  const merge = new MergeSort(arrToSort);
  window.mergeSort = merge;
}

function insertionSortTest() {
  console.log("Insertion Sort Test");
  const insertionSort = new InsertionSort(arrToSort);
  window.insertionSort = insertionSort;
}

function PatienceSortTest() {
  console.log("Patience Sort Test");
  const patienceSort = new PatienceSort(arrToSort);
  window.patienceSort = patienceSort;
}
