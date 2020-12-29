import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

export interface IProps {
    items: INavBarItem[]    
}

export interface INavBarItem {
    route: string,
    title: string    
}

export const NavBar = ({items} : IProps) => (
  <nav className="main-nav">
    <NavItemWrapper>
        {items.map((item : INavBarItem, index: number) => (
            <li key = {index}>
                <Link to={item.route}>{item.title}</Link>
            </li>
        ))}
    </NavItemWrapper>
  </nav>
);

const NavItemWrapper = styled.ul`
  list-style: none;

  li {
    display: inline-block;
    margin-right: 16px;
  }
`
