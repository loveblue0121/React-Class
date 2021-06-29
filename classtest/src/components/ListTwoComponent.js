import React from 'react';

function List(props) {
  const { Qty, total } = props;

  return (
    <>
      <div className="col-md-4 summary">
        <div>
          <h5>
            <b>付款摘要</b>
          </h5>
        </div>
        <hr />
        <div className="row">
          <div className="col col-style">共 {Qty()} 項目</div>
        </div>
        <div className="row row-style">
          <div className="col">總價</div>
          <div className="col text-right">${total()}</div>
        </div>
        <button className="btn">前往付款</button>
      </div>
    </>
  );
}

export default List;
