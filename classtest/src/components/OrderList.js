import React from 'react';
import ProductItem from './ProductItem';

function OrderList(props) {
  const {
    listOne,
    listTwo,
    listThree,
    setlistOne,
    setlistTwo,
    setlistThree,
    priceList,
    pictureList,
    nameList,
  } = props;

  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>訂購單</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              3種商品項目
            </div>
          </div>
        </div>
        <ProductItem
          tshirt={listOne}
          setTshirt={setlistOne}
          price={priceList.listOne}
          picture={pictureList.listOne}
          name={nameList.listOne}
        />
        <ProductItem
          tshirt={listTwo}
          setTshirt={setlistTwo}
          price={priceList.listTwo}
          picture={pictureList.listTwo}
          name={nameList.listTwo}
        />
        <ProductItem
          tshirt={listThree}
          setTshirt={setlistThree}
          price={priceList.listThree}
          picture={pictureList.listThree}
          name={nameList.listThree}
        />
        <div className="back-to-shop">
          <a href="#/">←</a>
          <span className="text-muted">回到商品頁</span>
        </div>
      </div>
    </>
  );
}

export default OrderList;
