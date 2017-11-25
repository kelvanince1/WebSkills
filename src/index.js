import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import 'react-bootstrap';

import Homepage from './Components/Homepage';
import Login from './Components/Login';
import SkillsPage from './Components/SkillsPage';
import OtherUsersSkills from './Components/OtherUsersSkills';
import NewSkills from './Components/NewSkills';
import registerServiceWorker from './registerServiceWorker';

import reducers from './Reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/skills" component={SkillsPage} />
        <Route exact path="/addskill" component={NewSkills} />
        <Route exact path="/othersskills" component={OtherUsersSkills} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
