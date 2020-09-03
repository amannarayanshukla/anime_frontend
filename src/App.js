import React from 'react';
import SearchInput from './component/search/Search';
import Card from "./component/card/Card";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchInput/>
        <Card/>
      </header>
    </div>
  );
}

export default App;
