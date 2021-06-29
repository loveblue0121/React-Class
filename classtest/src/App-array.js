import React from 'react';
//函式如果是react的元件，開頭要大寫
function App() {
  const array = ['我', '寫', '不', '出', '來'];
  return (
    <>
      <h1>陣列</h1>
      <ul>
        {array.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </>
  );
}

export default App; //導出
//檔名、元件函式、及導出的名字要一樣
