import styled from 'styled-components'
import { darken } from 'polished'

//define color variants
const primary = "#03a87c";
const secondary = "white";

const Button = styled.button`
    height: 2.2em;
    padding: 0em .4em;
    border: 1px solid #03a87c;
    background-color: ${props => (props.primary ? primary : secondary)};
    color: ${props => (props.primary ? secondary : primary)};
    border-radius: 3px;
    font-size: 1em;
    cursor: pointer;
    margin-left: ${props => props.navbutton ? '10px' : 0}
    :hover {
        background: ${props => props.primary ? darken(0.07, primary) : 'white'}
        color: ${props => !props.primary && darken(.07, primary)}
        border: ${props => props.primary && darken(.07, primary)}
        transition: all 0.3s ease;
    }
`;

export default Button