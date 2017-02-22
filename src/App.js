import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContentMain from './components/ContentMain';
import Main from './components/main/Main';
import CalculationsPanel from './components/calculations-panel/CalculationsPanel';
import { Router, Route, browserHistory } from 'react-router';





class App extends Component {

  render() {
    return (
      <div className="App">
        <Router history={browserHistory}>
          <Route path="/" component={Main}>
            <Route path="debtors" component={ContentMain} />
            <Route path="calculations" component={ContentMain}>
              <Route path="calc/:id" component={CalculationsPanel} />
            </Route>
            <Route path="contacts" component={ContentMain} />
            <Route path="addcalculation" component={ContentMain} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
