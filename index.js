// const driveAge = 10;
// if (driveAge > 18) {
//   console.log("You are old enough to drive");
// } else {
//   const uldsen = 18 - driveAge;
//   console.log("You are left with", uldsen, "years to drive");
// }

// const num = 20;
// if (num % 2 == 1) {
//   console.log("odd");
// } else if (num % 2 == 0) {
//   console.log("even");
// }

// const age = 55;
// if (age < 14) {
//   console.log("children");
// } else if (age >= 14 && age <= 24) {
//   console.log("youth");
// } else if (age >= 24 && age <= 64) {
//   console.log("adult");
// } else {
//   console.log("seniors");
// }

// const baruun = 5;
// const zuun = 2;
// const dood = 2;

// if (baruun == zuun && baruun == dood && zuun == dood) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// const ogogdsonOn = 1995;
// const olympEhelsenOn = 1896;
// if (ogogdsonOn >= olympEhelsenOn && (ogogdsonOn - olympEhelsenOn) % 4 === 0) {
//   console.log("olympiin on mon");
// } else console.log("olympiin on bish");

// const ogogdsonon = 1928;
// const year1 = 1924;

// if (ogogdsonon >= year1 && (ogogdsonon - year1) % 2 === 0) {
//   console.log("right");
// } else console.log("false");

// const dugaar = 3776;
// const ariindugaar = dugaar % 10;

// switch (ariindugaar) {
//   case 1:
//   case 6:
//     console.log("ywq");
//     break;
//   case 2:
//   case 7:
//     console.log("ywna");
//     break;
//   case 3:
//   case 8:
//     console.log("ywna");
//     break;
//   case 4:
//   case 9:
//     console.log("ywna");
//     break;
//   case 5:
//   case 0:
//     console.log("ywna");
//     break;
// }

// const sar = 9;
// switch (sar) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("owol");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("hawar");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("zun");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("namar");
//     break;
// }

// const litr = 30;
// const benzin = 92;

// switch (benzin) {
//   case 92:
//     console.log(2500 * litr);
//     break;
//   case 95:
//     console.log(3000 * litr);
//     break;
//   case D:
//     console.log(2200 * litr);
//     break;
// }

// const dun = 60;

// if (dun >= 60) {
//   console.log("tenttsen");
// } else {
//   console.log("tentseegui");
// }

// const jil = 201;
// if ((jil % 4 === 0 && jil % 100 !== 0) || jil % 400 == 0) {
//   console.log("tiim");
// } else console.log("ugui");

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }
// console.log(sum);

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 1; i < array.length; i++) {
//   if (i % 2 === 0) console.log(i);
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 1; i < array.length; i++) {
//   if (i % 2 === 1) console.log(i);
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 1; i < array.length; i++) {
//   // array[i] = array[i] * 2;
//   array[i] *= 2;
// }
// console.log(array);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let zurgaa = 6;

let bnu = false;

for (let i = 1; i < array.length; i++) {
  if (array[i] === zurgaa) {
    bnu = true;
    break;
  }
}
console.log(bnu);
