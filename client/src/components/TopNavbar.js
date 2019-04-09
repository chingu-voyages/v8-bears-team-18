import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Button from './Button'
import Nav from './Nav'
import Link from './Link'
import SearchBar from './SearchBar'

const Navbar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 75px;
    background-color: white;
`

export default function TopNavbar(props){
    return (
      <Navbar>
          <Nav>
            <Logo>{props.width > 500 ? 'Medium' : 'M'}</Logo>
            <SearchBar />
            {props.width > 768 ? <Link navlink>Become a member</Link> : '' }
            {props.width > 768 ? <Link primary navlink>Sign In</Link> : '' }
            <Button navbutton>Get Started</Button>
          </Nav>
      </Navbar>
    )
}
