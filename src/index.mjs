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

// const val5 =['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 * いちいち+を書かなくてよい。
 */
// const name = "いとと";
// const age = "28";
// // 私の名前はいととです。年齢は28歳です。
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);
/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
//     return str;
// }
const func1 = function(str) {
    return str;
}
console.log(func1("func1です")); 

//アロー関数
const func2 = (str) => {
    return str;
}
console.log(func2("func2です"));

const func3 =(num1,num2) => {
    return num1 + num2;
} 
console.log(func3(10,20));
