import React from 'react';

class App extends React.Component {
  constructor() {
    //呼叫父母類別的建構式
    super();
    //狀態必為物件值
    this.state = {
      total: 0,
    }; //狀態
  }
  render() {
    return (
      <>
        <h1
          onClick={() => {
            //setState接收的是一個物件值
            this.setState({ total: this.state.total + 1 });
          }}
        >
          {this.state.total}
        </h1>
      </>
    );
  }
}

export default App; //導出
//檔名、元件函式、及導出的名字要一樣
