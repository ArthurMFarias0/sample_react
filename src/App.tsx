import './App.css';
import React from "react";
import { Title } from './components/Title/Title';
import { Text } from './components/Text/Text';

function App() {
  const nome = 'Arthur';
  return (
    <>
      <Title nome="Arthur"/>
      <Text />
    </>
  );
}

export default App;
