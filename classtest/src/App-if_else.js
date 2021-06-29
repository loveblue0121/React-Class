import React, { useState } from 'react';
//函式如果是react的元件，開頭要大寫
function App() {
  const [total, setTotal] = useState(0);
  return (
    <>
      <h1 onClick={() => setTotal(total + 1)}>{total}</h1>
      <br />
      {/* 相當於if...else */}
      {total === 0 ? <p>你可以開始點數字了</p> : <p>繼續點</p>}
      {/* 相當於if... */}
      {total === 0 && <p>你可以開始點數字了</p>}
    </>
  );
}

export default App; //導出
//檔名、元件函式、及導出的名字要一樣
