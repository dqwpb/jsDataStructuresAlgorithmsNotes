/*
 1. ==︰可用於不同類型

   [x == y 真值表]：
   類型(x)              類型(y)               結果
   null                 undefined             true
   undefined            null                  true

   數字                 字串                  x == toNumber(y)
   字串                 數字                  toNumber(x) == y

   布林值               任何類型              toNumber(x) == y
   任何類型             布林值                x == toNumber(y)
   
   字串或數字           物件                  x == toPrimitive(y)
   物件                 字串或數字            toPrimitive(x) == y
 
   ps1: toNumber()
   toNumber(undefined)      NaN
   toNumber(null)           0
   toNumber(true)           1
   toNumber(false)          0
   toNumber(數字)           數字
   toNumber(全數字字串)     數字
   toNumber(含字母字串) NaN
   toNumber(物件)           Number(toPrimitive(物件))

   ps2: toPrimitive()
   toPrimitive(物件)        若物件.valueOf是值就返回此值
                            若物件.toString是字串,就返回此字串
                            否則一律返回錯誤(不是false)

 2. ===：不同類型一定false，類型相同則依下表判斷
 
   [x === y 真值表]：除了以下皆false
   類型             值                      結果
   數字             x與y數值相同皆非NaN     true
   字串             x與y每個字元相同        true
   布林值           x與y都是true或false     true
   物件             x與y引用同一個物件      true

 */

console.log('test' == true);            // false
console.log('test' == false);           // false

console.log('test' === true);           // false
console.log('test' === 'test');         // true

var person1 = {name: 'John'};
var person2 = {name: 'John'};
console.log(person1 === person2);       // false
