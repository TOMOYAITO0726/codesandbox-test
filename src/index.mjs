/**
 * const,let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);
// //var変数は上書き可能
// val1="var変数を上書き";
// console.log(val1);
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
// const func1 = function(str) {
//     return str;
// }
// console.log(func1("func1です")); 
// //アロー関数
// const func2 = (str) => {
//     return str;
// }
// console.log(func2("func2です"));

// const func3 =(num1,num2) => {
//     return num1 + num2;
// } 
// console.log(func3(10,20));

/**
 * 分割代入
 */
// const myProfile  = {
//     name:"じゃけえ",
//     age: 28,
// };
// const message1 =`名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);
// const {name, age} = myProfile;
// const message2 =`名前は${name}です。年齢は${age}歳です`;
// console.log(message2);
// const myProfile =[`じゃけえ`, 28];

// const message3 =`名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 =`名前は${name}です。年齢は${age}歳です`;
// console.log(message4);
/**
 * デフォルト、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();
/**
 * スプレッド構文
 */
//配列の展開
// const arr1 =[1,2];
// //console.log(arr1);
// //console.log(...arr1);
// const sumFunc =(num1, num2) => console.log(num1 + num2);
// //sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 =[1,2,3,4,5];
// const[num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(...arr3);
//配列のコピー、結合 
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// //スプレッド構文でコピー
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);
// //配列でコピー→参照渡しになるため元の値arr4[0]も変わってしまう
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);
// const arr7 =[...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr =["田中","山田","佐藤"];
//returnされた結果にに基づいて新しい配列を生成する
// const nameArr2 = nameArr.map((name)=>{
//     return name;
// })
// console.log(nameArr2);
//配列をループして処理する
///nameArr.map((name) => console.log(name));