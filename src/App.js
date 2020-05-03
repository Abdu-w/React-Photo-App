import React, {Component} from 'react';








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
