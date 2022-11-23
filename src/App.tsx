import './App.css';
import React from "react";
import { Title } from './components/Title/Title';
import { Text } from './components/Text/Text';
import { Nav } from './components/Nav/Nav';

function App() {
  const nome = 'Arthur';
  return (
    <>
      <Nav/>
      <Title nome="Arthur"/>
      <Text />
    </>
  );
}

export default App;
