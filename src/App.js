import React, { Component } from 'react';
import './App.css';
import CalculationsMain from './components/main/CalculationsMain';
import DebtorsMain from './components/main/DebtorsMain';
import ContactsMain from './components/main/ContactsMain';
import Main from './components/main/Main';
import CalculationsPanel from './components/calculations-panel/CalculationsPanel';
import { Router, Route, browserHistory } from 'react-router';





class App extends Component {

  render() {
    return (
      <div className="App">
        <Router history={browserHistory}>
          <Route path="/" component={Main}>
            <Route path="debtors" component={DebtorsMain} />
            <Route path="calculations" component={CalculationsMain}>
              <Route path="calc/:id" component={CalculationsPanel} />
            </Route>
            <Route path="contacts" component={ContactsMain} />
            <Route path="addcalculation" component={CalculationsMain} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
