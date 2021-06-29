import React, { useState } from 'react';
import './App.css';
import OrderList from './components/OrderList';
import List from './components/List';

function App() {
  const [listOne, setlistOne] = useState(1);
  const [listTwo, setlistTwo] = useState(1);
  const [listThree, setlistThree] = useState(1);

  const Qty = () => listOne + listTwo + listThree;

  const priceList = {
    listOne: 300,
    listTwo: 200,
    listThree: 450,
  };

  const pictureList = {
    listOne: 'https://i.imgur.com/1GrakTl.jpg"',
    listTwo: 'https://i.imgur.com/ba3tvGm.jpg',
    listThree: 'https://i.imgur.com/pHQ3xT3.jpg',
  };

  // 每個產品的名稱
  const nameList = {
    listOne: '咖啡色 T-shirt',
    listTwo: '白色 T-shirt',
    listThree: '黑色 T-shirt',
  };
  const total = () =>
    Number(
      priceList['listOne'] * listOne +
        priceList['listTwo'] * listTwo +
        priceList['listThree'] * listThree
    ).toLocaleString();
  return (
    <div className="card">
      <div className="row">
        <OrderList
          listOne={listOne}
          listTwo={listTwo}
          listThree={listThree}
          setlistOne={setlistOne}
          setlistTwo={setlistTwo}
          setlistThree={setlistThree}
          priceList={priceList}
          pictureList={pictureList}
          nameList={nameList}
        />
        <List Qty={Qty} total={total} />
      </div>
    </div>
  );
}

export default App;
