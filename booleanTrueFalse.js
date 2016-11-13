function testTruthy(val) {
  return val ? console.log('truthy') : console.log('falsy');
}

/*
  數值類型        布林值
  undefined      false
  null           false
  true           true
  false          false
  數字            +0、-0、NaN是false，其他都是true
  字串            空字串('')是false，其他都是true
  物件            true
 */

testTruthy(true);                     // truthy
testTruthy(false);                    // falsy
testTruthy(new Boolean(false));       // truthy

testTruthy('');                       // falsy
testTruthy('test');                   // truthy
testTruthy(new String(''));           // truthy

testTruthy(1);                        // truthy
testTruthy(0);                        // falsy
testTruthy(NaN);                      // falsy
testTruthy(new Number(NaN));          // truthy

var obj = {name: 'John'};             // truthy
testTruthy(obj);                      // truthy
testTruthy(obj.name);                 // truthy
testTruthy(obj.age);                  // falsy
