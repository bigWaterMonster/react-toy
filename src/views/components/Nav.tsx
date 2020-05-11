import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";

const NavX = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, .25);
  >ul {
    text-align: center;
    display: flex;
    > li {
      flex-grow: 1;
      padding: 16px;
    }
  }
`

function Nav() {
  return (
    <NavX>
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
    </NavX>
  )
}

export default Nav