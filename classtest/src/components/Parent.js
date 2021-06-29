import React, { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';
function Parent() {
  const [parentData, setParentData] = useState('parent data');
  const [isChildAAlive, setIsChildAAlive] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          setIsChildAAlive(!isChildAAlive);
        }}
      >
        {isChildAAlive ? 'Child A Byebye' : 'Child A Back'}
      </button>
      {isChildAAlive && <ChildA parentData={parentData} />}
      <ChildB setParentData={setParentData} />
    </>
  );
}
export default Parent;
