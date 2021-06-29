import React, { useState } from 'react';
import './App.css';
import OrderList from './components/OrderList';
import List from './components/List';

function App() {
  const [listOne, setlistOne] = useState(1);
  const [listTwo, setlistTwo] = useState(1);
  const [listThree, setlistThree] = useState(1);

  const Qty = () => listOne + listTwo + listThree;

  const price = {
    listOne: 300,
    listTwo: 200,
    listThree: 450,
  };
  const total = () =>
    Number(
      price['listOne'] * listOne +
        price['listTwo'] * listTwo +
        price['listThree'] * listThree
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
        />
        <List Qty={Qty} total={total} />
      </div>
    </div>
  );
}

export default App;
