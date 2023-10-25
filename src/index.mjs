/**
 * const,let等の変数宣言
 */

var val1 = "var変数";
console.log(val1);
//var変数は上書き可能
val1="var変数を上書き";
console.log(val1);
// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//     name: "いとと",
//     age: 28,
// };
// val4.name ="it"
// val4.address ="Chiba";
// console.log(val4);
// constで定義した配列はプロパティの変更が可能

const val5 =['dog', 'cat'];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);