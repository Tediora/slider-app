import React from 'react';
import './App.css';
import styled from "styled-components";
import SliderExample from './SliderExample';

const Page = styled.div`
  width: 100%;
  height: 100%;
  background-color: #4297DE;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 390px;
  max-width: 95%;
  height: 500px;
  background-color: #FCFCFC;
  border-radius: 28px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Page>
          <Container>
            <SliderExample />
          </Container>
        </Page>
      </header>
    </div>
  );
}

export default App;