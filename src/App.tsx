import React from "react";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Money from './views/money/Money'
import Labels from './views/labels/Labels'
import Statistics from './views/statistics/Statistics'
import NoMatch from './views/NoMatch'
import Nav from './views/components/Nav'
import styled from "styled-components"


const Wrapper = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  border: 1px solid blue;
  flex-grow: 1;
  overflow: auto;
`



function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>
        <Nav/>
      </Wrapper>
    </Router>
  );
}

export default App