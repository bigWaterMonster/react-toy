import React from "react";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Money from './views/money/Money'
import Labels from './views/labels/Labels'
import Statistics from './views/statistics/Statistics'
import NoMatch from './views/NoMatch'
import styled from "styled-components";
import TagEdit from "views/tagEdit/TagEdit";

const AppWrapper = styled.div`
  color: #333;
`

function App() {
  return (
    <Router>
      <AppWrapper>
        <Switch>
          <Route exact path="/labels" component={Labels} />
          <Route exact path="/tags/:id">
            <TagEdit />
          </Route>
          <Route exact path="/money" render={() => <Money />} />
          <Route exact path="/statistics">
            <Statistics />
          </Route>
          <Redirect exact from="/" to="/money" />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </AppWrapper>
    </Router>
  );
}

export default App