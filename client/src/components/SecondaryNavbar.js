import React from "react";
import Link from './Link'
import styled from 'styled-components'

const navItems = ["Home", "News", "Biology", "Tech", "World", "Politics", "Space", "Programming", "Health"]

const SecondaryNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
		max-width: 900px;
    height: 45px;
    overflow-x: hidden;
`

export default function SecondaryNavbar(props) {
	//check for viewport size, only show first 5 links if less than 769 (mobile)
  return (
    <SecondaryNav>
        { props.width > 769  
					?	navItems.map(item => <Link navlink fontSize="1em">{item}</Link>)
					: navItems.slice(0,5).map(item => {
						return <Link navlink fontSize="1em">{item}</Link>;
					})}
    </SecondaryNav>
  )
}


