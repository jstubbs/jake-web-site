import React from 'react';
import Homepage from 'components/homepage';
import Header from 'components/header';
import TitlePage from 'components/titlePage';
import './index.scss';

function App() {
  return (
    <div>
      <Header />
      <TitlePage />
      <Homepage />
    </div>
  );
}

export default App;