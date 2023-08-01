/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-const */
/* eslint-disable import/extensions */

import runChallenges from "../spec/even_or_odd_examiner.js";

export const evenOrOdd = number => (number % 2 === 0 ? "even" : "odd");
// TODO: this should return "even" if the number is even, "odd" otherwise

// export const evenOrOdd = (number) => {
//   // TODO: this should return "even" if the number is even, "odd" otherwise
//   if (number % 2 === 0) {
//     return "even"
//   } else {
//     return "odd"
//   };
// };

// Checking exercise answers. DO NOT MODIFY THIS LINE.
runChallenges(evenOrOdd);
