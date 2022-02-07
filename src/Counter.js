import React, { useState } from 'react';

function Counter() {
  // useState를 쓸때는 배열로 정의하여 쓴다.
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber((preNumber) => preNumber + 1);
  };
  const onDecrease = () => {
    // 두가지 방법으로, useState를 사용할 수 있다.
    setNumber(number - 1);
    // setNumber((preNumber) => preNumber - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
