/** @format */

import airfryer from "./airfryer";
import juice from "./juice";
import nutmilk from "./nutmilk";
import blog from "./blog";

const fakeData = [...airfryer, ...juice, ...nutmilk, ...blog];

// const shuffle = a => {
//     for (let i = a.length; i; i--) {
//         let j = Math.floor(Math.random() * i);
//         [a[i - 1], a[j]] = [a[j], a[i - 1]];
//     }
// }

export default fakeData;
