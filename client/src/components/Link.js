import styled from 'styled-components'
import { darken } from 'polished'

//define color variants
const primary = "#03a87c"
const secondary = "gray"

const Link = styled.a`
    color: ${ props => props.primary ? primary : secondary };
    cursor: pointer;
    font-size: 1em;
    margin-left: ${props => props.navlink ? '10px' : ''}
    :hover {
        color: ${props => props.primary ? darken(0.1, primary) : darken(0.15, secondary)}
    }
`

export default Link