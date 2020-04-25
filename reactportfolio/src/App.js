import React from 'react';
import FooterNav from './components/Footer/Footer';
import HeaderNav from './components/Header/Header';
import CodeImage from './components/CodeImage/CodeImage';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <CodeImage />
      <FooterNav />
    </div>
  )
}

export default App;
