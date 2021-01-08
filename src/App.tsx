import React from 'react';
import Home from './pages/Home';


import './App.css';

class App extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div>
        <Home></Home>
      </div>
    )
  }
}

export default App;