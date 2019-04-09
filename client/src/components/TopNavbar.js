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
    position: absolute;
    width: 100%;
    height: 65px;
    margin-top: auto;
    background-color: white;
`

export default class TopNavbar extends Component {
  constructor(props) {
  super(props);
  this.state = { width: 0, height: 0 };
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  //add resize event listener to update state when viewport resizes
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  //update widnow size dynamically
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <Navbar>
          <Nav>
            <Logo>{this.state.width > 500 ? 'Medium' : 'M'}</Logo>
            <SearchBar />
            {this.state.width > 768 ? <Link navlink>Become a member</Link> : '' }
            {this.state.width > 768 ? <Link primary navlink>Sign In</Link> : '' }
            <Button navbutton>Get Started</Button>
          </Nav>
      </Navbar>
    )
  }
}
