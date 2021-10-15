import React, { Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar';

function App() {
  return (
    <Fragment>
        <NavBar />
        <Router>
        <div>
          <Switch>
            {/* <Route exact component={Home} path="/" /> */}
            {/* <Route exact component={VehicleDetails} path="/vehicle/:id" /> */}
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
