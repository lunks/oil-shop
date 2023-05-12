import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 


function App() {
  return (
    <Router>
    <Switch>
    <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
    </Switch>
  </Router>
  );
}

export default App;
