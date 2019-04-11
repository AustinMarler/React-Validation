import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ProfileForm from './ProfileForm';
import ThankYou from './ThankYou';
import '../styles/main.css';

const App = (props) => (
  <Router>
    <div id="mainContainer">
      <Route exact path ="/" component={ProfileForm} />
      <Route exact path ="/thankYou/" component={ThankYou} />
    </div>
  </Router>
)

export default App;