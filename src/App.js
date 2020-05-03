import React from 'react';
import { BrowserRouter, Route, Switch,Link} from 'react-router-dom';
import Logging from './components/Logging';
import HomePage from './components/HomePage';








function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>  
          <HomePage />
          <Route path="home" component={HomePage}/>
          <Route component={Logging}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
