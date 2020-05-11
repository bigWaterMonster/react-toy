import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import SvgIcon from './SvgIcon'

const NavX = styled.nav`
  line-height: 20px;
  box-shadow: 0 0 3px rgba(0, 0, 0, .25);
  >ul {
    text-align: center;
    display: flex;
    > li {
      flex-grow: 1;
      padding: 4px;
      display: flex;
      flex-direction: column;
      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`

function Nav() {
  return (
    <NavX>
      <ul>
        <li>
          <Link to="/money">
            <SvgIcon name="money"/>
            <p>记账</p>
          </Link>
        </li>
        <li>
          <Link to="/labels">
            <SvgIcon name="tag"/>
            <p>标签</p>
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <SvgIcon name="statistics"/>
            <p>统计</p>
          </Link>
        </li>
      </ul>
    </NavX>
  )
}

export default Nav