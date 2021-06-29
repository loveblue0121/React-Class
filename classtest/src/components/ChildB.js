import React, { useState } from 'react';

function ChildB(props) {
  const [childBData, setChildBData] = useState('child B data');
  return (
    <>
      <hr />
      <h1>Child B</h1>
      <button
        onClick={() => {
          props.setParentData(childBData);
        }}
      >
        設定Parent Data
      </button>
    </>
  );
}

export default ChildB;
