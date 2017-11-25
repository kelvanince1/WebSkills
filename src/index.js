import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'react-bootstrap';

import Homepage from './Components/Homepage';
import SkillsPage from './Components/Skillspage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/skills" component={SkillsPage} />
    </div>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
