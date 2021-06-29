import React, { useState } from 'react';
//函式如果是react的元件，開頭要大寫
function App() {
  //<></>原始語法是<React.Fragment></React.Fragment>
  //定義一組狀態
  //解構賦值(ES6)
  //useState(0) 呼叫完會得到0
  // [獲得狀態(變數), 設定狀態(函式)]
  const [total, setTotal] = useState(0);
  return (
    <>
      <h1
        onClick={() => {
          //只能用setTotal來改變total的值
          setTotal(total + 1);
        }}
      >
        {total}
      </h1>
    </>
  );
}

export default App; //導出
//檔名、元件函式、及導出的名字要一樣
