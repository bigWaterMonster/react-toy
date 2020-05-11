import React from "react";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Money from './views/money/Money'
import Labels from './views/labels/Labels'
import Statistics from './views/statistics/Statistics'
import NoMatch from './views/NoMatch'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/labels" component={Labels}>
        </Route>
        <Route exact path="/money" render={() => <Money />}>
        </Route>
        <Route exact path="/statistics">
          <Statistics />
        </Route>
        <Redirect exact from="/" to="/money" />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App