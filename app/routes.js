import React from 'react';
import { Switch, Route } from 'react-router';

import MainPage from './containers/MainPage';
import LoginPage from './containers/LoginPage';
import HistoryPage from './containers/HistoryPage';
import SettingPage from './containers/SettingPage';

export default (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route exact path="/loggedin" component={MainPage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/history" component={HistoryPage} />
    <Route exact path="/setting" component={SettingPage} />
  </Switch>
);
