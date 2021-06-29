import React, { useState } from 'react';

function Test() {
  const [text, setText] = useState(520);

  return (
    <>
      <h1
        onClick={() => {
          if (text <= 520) setText(text + 1);
        }}
      >
        {text}
      </h1>
    </>
  );
}
export default Test;
