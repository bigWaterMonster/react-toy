import React from 'react'
import { NavLink } from 'react-router-dom'
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
      .active {
        color: red;
        .icon {
          fill: red;
        }
      }
    }
  }
`

function Nav() {
  return (
    <NavX>
      <ul>
        <li>
          <NavLink to="/money" activeClassName="active">
            <SvgIcon name="money" />
            <p>记账</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/labels" activeClassName="active">
            <SvgIcon name="tag" />
            <p>标签</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="active">
            <SvgIcon name="statistics" />
            <p>统计</p>
          </NavLink>
        </li>
      </ul>
    </NavX>
  )
}

export default Nav