import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import login from './pages/login';
import './App.css';
import React from 'react';

<Router>
    <div>
       <Switch>
           <Route exact path="/login" component={login}/>
       </Switch>
    </div>
</Router>

function App() {
  return (
    <div>
    </div>
  );
}

export default App;