import React from 'react';
import GlobalStyle from './globalStyles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Navbar} from './components'

function App() {
  return (
    <Router>
      <GlobakStyle/>
      <Navbar/>
    </Router>
  );
}

export default App;
