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
//変数の中に関数を定義する
// const func1 = function(str) {
//     return str;
// }
// console.log(func1("func1です")); //func1です
// //アロー関数
// const func2 = (str) => {
//     return str;
// }
// console.log(func2("func2です"));//func2です
    
//処理が１行ならreturn{}を省略できる
    //const func2 = (str) => str;
    //console.log(func2("func2です")); //func2です

// const func3 =(num1,num2) =>  num1 + num2;

// console.log(func3(10,20));//30

/**
 * 分割代入
 */
// const myProfile  = { //myProfileオブジェクトからname,ageプロパティを取り出す
//     name:"じゃけえ",
//     age: 28,
// };
// const message1 =`名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);
// const {name, age} = myProfile;
// const message2 =`名前は${name}です。年齢は${age}歳です`;
// console.log(message2);
// const myProfile =[`じゃけえ`, 28]; //配列として定義

// const message3 =`名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 =`名前は${name}です。年齢は${age}歳です`; //順番が大事！
// console.log(message4);
/**
 * デフォルト、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello(); //nameに何も定義しないとundifinedとなる
/**
 * スプレッド構文
 */
//配列の展開
// const arr1 =[1,2];
// //console.log(arr1);//[1,2]
// //console.log(...arr1);//1 2 配列の中身を順番に処理
// const sumFunc =(num1, num2) => console.log(num1 + num2);
// //sumFunc(arr1[0], arr1[1]);//3
// sumFunc(...arr1);//3

//まとめる
// const arr2 =[1,2,3,4,5];
// const[num1, num2, ...arr3] = arr2;
// console.log(num1);//1
// console.log(num2);//2
// console.log(arr3);//[3,4,5]

//配列のコピー、結合 
// const arr4 = [10, 20];
// const arr5 = [30, 40];
//スプレッド構文でコピー
// const arr6 = [...arr4]; //新しい配列が作成され、arr4の要素がコピーされる
// console.log(arr6);//[10,20]
// arr6[0] = 100;
// console.log(arr6);//[100,20]
// console.log(arr4);//[10,20]
// 
// const arr8 = arr4;// arr4と同じ配列を指す（参照渡し）
// arr8[0] = 100;
// console.log(arr4);//[100,20]
// const arr7 =[...arr4, ...arr5];
// console.log(arr7);//[10,20,30,40]

/**
 * mapやfilterを使った配列の処理
 */
const nameArr =["田中","山田","佐藤"];
// for(let index = 0; index < nameArr.length; index++) {
//     console.log(nameArr[index]);
// }
// //returnされた結果にに基づいて新しい配列を生成する
// const nameArr2 = nameArr.map((name)=>{
//     return name;
// })
 //console.log(nameArr2);//["田中","山田","佐藤"]
//配列をループして処理する
//nameArr.map((name) => console.log(name));//田中、山田、佐藤
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

//Filter→ある条件に一致した値を取り出す
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//     return num % 2 == 0;
// });
// console.log(newNumArr);//[2,4]

// const newNameArr = nameArr.map((name) => {
//     if (name == "田中"){
//         return name
//     } else {
//         return `${name}さん`
//     }
// })
// console.log(newNameArr);//['田中', '山田さん', '佐藤さん']
/**
 * 三項演算子
 */
//ある条件？条件がtrueの時:条件がfalseの時
// const num = 1300;
// console.log(num.toLocaleString()); //1,300カンマ区切りで表示
// const formattedNum = typeof num == `number` ? num.toLocaleString() : `数値を入力してください`;
// console.log(formattedNum); //数字の時はカンマ区切りで表示　文字ならば「数値を入力してください」

// const checkSum = (num1, num2) => {
//     return num1 + num2 > 100 ? `100を超えています!!` : `許容範囲内です`;
// }
// console.log(checkSum(20, 81)); //100を超えています!!
/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// ||は左側がflaseなら右を返す 左側がtrueなら左側を返す
// const num = null;
// const fee = num || "金額未設定です"
// console.log(fee);
//　&&は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);