import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import './App.css';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial />
      {/* Boolean 변수를 사용할때, 변수 자체만 사용해도  true 값을 반홚나다. */}
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
