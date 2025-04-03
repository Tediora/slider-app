import React from 'react';
import './App.css';
import styled from "styled-components";
import SliderExample from './SliderExample';

const Container = styled.div`
  width: 400px;
  height: 500px;
  background-color: #FCFCFC;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <SliderExample />
        </Container>
      </header>
    </div>
  );
}

export default App;