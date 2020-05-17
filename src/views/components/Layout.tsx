import React, { FC } from 'react'
import styled from "styled-components";
import Nav from './Nav';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`

const Layout: FC = (props: any) => {
  return (
    <Wrapper>
      <Main className={props.className}>
        {props.children}
      </Main>
      <Nav />
    </Wrapper>
  )
}

Layout.defaultProps = {
  scrollTop: 0
}

export default Layout