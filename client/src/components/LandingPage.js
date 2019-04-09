import React, { Component } from 'react'
import TopNavbar from './TopNavbar'
import SecondaryNavbar from './SecondaryNavbar'
import styled from 'styled-components'

const PageContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`



export default class LandingPage extends Component {
  constructor(props) {
  super(props);
  this.state = { 
    width: 0, 
    height: 0,
  };
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
      <PageContainer>
        <TopNavbar width={this.state.width}/>
        <SecondaryNavbar width={this.state.width}/>
      </PageContainer>
    );
  }
}
