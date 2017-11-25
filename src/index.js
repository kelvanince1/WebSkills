import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'react-bootstrap';

import Homepage from './Components/Homepage';
import SkillsPage from './Components/SkillsPage';
import OtherUsersSkills from './Components/OtherUsersSkills';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/skills" component={SkillsPage} />
      <Route exact path="/othersskills" component={OtherUsersSkills} />
    </div>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
