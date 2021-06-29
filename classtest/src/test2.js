//pure function 純粹函式 純函式
function sum(a, b) {
    return a + b ;
  }

//1. 不依賴外部的變數(環境變數值...)
//return a+b+count 違反規則

let count = 0;
function sum(a, b) {
  return a + b + count;
}
//2. 給定相同的傳入值，必定會得到相同的傳入值 a=1 b=2  a+b=3
//違反規則
function sum1(a, b) {
  return a + b + Math.random();
}

//3. 不能有副作用(side effect)
function sum2(a, b) {
    //用了計數器(setTimeout)、ajax、fetch、
    //console.log()也不是一個標準的API (只是Chrome有支援)
    return a + b;
}