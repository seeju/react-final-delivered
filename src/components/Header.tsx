import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { INavBarItem, NavBar } from './Navbar';

function Header() {
  const items : INavBarItem[] = [
    {
        title: "Home",
        route: "/home"
    },
    {
        title: "Calculadora",
        route: "/calculator"
    },
    {
        title: "Filmes",
        route: "/movies"
    },
  ]
  return (
    <>
    <HeaderWrapper className="header-wrapper">
      <div className="main-logo">
        <Logo />
      </div>
      <HeaderInfo className="header-info">
        <NavBar items={items} />
      </HeaderInfo>
  </HeaderWrapper>
    </>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  display: flex
`

const HeaderInfo = styled.div`
  width: 80%;
  text-align: right;
`