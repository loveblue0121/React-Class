import React from 'react';
import Child from './Child';
function Parent() {
  return (
    <>
      <Child text="Hello React!" myColor="blue" count={520} />
      <hr />
      <Child myColor="pink" count={106} />
    </>
  );
}
export default Parent;
