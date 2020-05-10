import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Money from './views/money/Money'
import Labels from './views/labels/Labels'
import Statistics from './views/statistics/Statistics'
import NoMatch from './views/NoMatch'
import styled from "styled-components";

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

const Nav = styled.nav`
  >ul {
    text-align: center;
    display: flex;
    > li {
      flex-grow: 1;
      padding: 16px;
    }
  }
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
        <Nav>
          <ul>
            <li>
              <Link to="/money">记账</Link>
            </li>
            <li>
              <Link to="/labels">标签</Link>
            </li>
            <li>
              <Link to="/statistics">统计</Link>
            </li>
          </ul>
        </Nav>
      </Wrapper>
    </Router>
  );
}

export default App