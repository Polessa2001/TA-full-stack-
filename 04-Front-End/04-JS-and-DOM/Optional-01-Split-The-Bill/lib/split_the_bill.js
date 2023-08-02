/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-const */
/* eslint-disable import/extensions */

import runChallenges from "../spec/split_the_bill_examiner.js";

const splitTheBill = (group) => {
  // Step 1: Calculate the total expense
  const keys = Object.keys(group);
  let totalExpense = 0;

  keys.forEach((key) => {
    const expense = parseInt(group[key], 10);
    totalExpense += expense;
  });

  // Step 2: Calculate the average expense
  const people = keys.length;
  const averageExpense = totalExpense / people;

  // Step 3: Calculate and store the share for each person
  const balance = {};
  keys.forEach((key) => {
    const expense = parseInt(group[key], 10);
    const shared = expense - averageExpense;
    balance[key] = shared;
  });

  return balance;
};

const updatePriceList = (group) => {
  // TODO 2: Add the necessary HTML elements to display the results
  const split = splitTheBill(group);
  Object.entries(split).forEach((row) => {
    console.log(document.getElementById(row[0]));
    document.getElementById(row[0]).querySelector(".due").innerHTML = `${row[1]}€`;
  });
};

// Do not remove these lines:
if (typeof window === "object") {
  document.addEventListener("DOMContentLoaded", () => {
    const group = {
      john: 120,
      paul: 30,
      ringo: 150
    };
    updatePriceList(group);
  });
}

// module.exports = splitTheBill; // Do not remove this line.
runChallenges(splitTheBill);
export { splitTheBill };
