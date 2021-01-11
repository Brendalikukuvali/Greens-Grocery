import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Fruits from './components/pages/Fruits';
import Vegetables from './components/pages/Vegetables';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route path='/' exact component={Home} />
          <Route path='/fruits' component={Fruits} />
          <Route path='/vegetables' component={Vegetables} />
          <Route path='/sign-up' component={SignUp} /> */}
           <Route path='/Greens-Grocery/home' exact component={Home} />
          <Route path='/Greens-Grocery/fruits' component={Fruits} />
          <Route path='/Greens-Grocery/vegetables' component={Vegetables} />
          <Route path='/Greens-Grocery/sign-up' component={SignUp} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
