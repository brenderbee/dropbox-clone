import React from 'react';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function App() {
  return(
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}



export default App;
