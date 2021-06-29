import React from 'react';

function OrderList(props) {
  const { listOne, listTwo, listThree, setlistOne, setlistTwo, setlistThree } =
    props;

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
        <div className="row border-top border-bottom">
          <div className="row main align-items-center">
            <div className="col-2">
              <img
                alt=""
                className="img-fluid"
                src="https://i.imgur.com/1GrakTl.jpg"
              />
            </div>
            <div className="col">
              <div className="row text-muted">Shirt</div>
              <div className="row">咖啡色 T-shirt</div>
            </div>
            <div className="col">
              <a
                href="#/"
                onClick={() => {
                  // 限制數量為最少要買1件
                  const newTshirtOne = listOne - 1 < 1 ? 1 : listOne - 1;

                  setlistOne(newTshirtOne);
                }}
              >
                -
              </a>
              <a href="#/" className="border">
                {listOne}
              </a>
              <a
                href="#/"
                onClick={() => {
                  setlistOne(listOne + 1);
                }}
              >
                +
              </a>
            </div>
            <div className="col">
              $300 <span className="close">&#10005;</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row main align-items-center">
            <div className="col-2">
              <img
                alt=""
                className="img-fluid"
                src="https://i.imgur.com/ba3tvGm.jpg"
              />
            </div>
            <div className="col">
              <div className="row text-muted">Shirt</div>
              <div className="row">白色 T-shirt</div>
            </div>
            <div className="col">
              <a
                href="#/"
                onClick={() => {
                  const newTshirtTwo = listTwo - 1 < 1 ? 1 : listTwo - 1;

                  setlistTwo(newTshirtTwo);
                }}
              >
                -
              </a>
              <a href="#/" className="border">
                {listTwo}
              </a>
              <a
                href="#/"
                onClick={() => {
                  setlistTwo(listTwo + 1);
                }}
              >
                +
              </a>
            </div>
            <div className="col">
              $200 <span className="close">&#10005;</span>
            </div>
          </div>
        </div>
        <div className="row border-top border-bottom">
          <div className="row main align-items-center">
            <div className="col-2">
              <img
                alt=""
                className="img-fluid"
                src="https://i.imgur.com/pHQ3xT3.jpg"
              />
            </div>
            <div className="col">
              <div className="row text-muted">Shirt</div>
              <div className="row">黑色 T-shirt</div>
            </div>
            <div className="col">
              <a
                href="#/"
                onClick={() => {
                  const newTshirtThree = listThree - 1 < 1 ? 1 : listThree - 1;

                  setlistThree(newTshirtThree);
                }}
              >
                -
              </a>
              <a href="#/" className="border">
                {listThree}
              </a>
              <a
                href="#/"
                onClick={() => {
                  setlistThree(listThree + 1);
                }}
              >
                +
              </a>
            </div>
            <div className="col">
              $450 <span className="close">&#10005;</span>
            </div>
          </div>
        </div>
        <div className="back-to-shop">
          <a href="#/">←</a>
          <span className="text-muted">回到商品頁</span>
        </div>
      </div>
    </>
  );
}

export default OrderList;
