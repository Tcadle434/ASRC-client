import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Homepage } from "./containers/homepage";
import { MyBots } from "./containers/mybots";
import { Upgrade } from "./containers/upgrade";


const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Homepage}></Route>
      <Route exact path='/mybots' component={MyBots}></Route>
      <Route exact path='/upgrade' component={Upgrade}></Route>

    </Switch>
  );
}

export default Main;
