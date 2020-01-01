import styled from 'styled-components';
import {Link} from '@reach/router'

export const NavigationOverlayNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s ease-out;
  transform: ${props => (props.active ? "translateY(0%)" : "translateY(-100%)")};
`

export const StyledNavLink = styled(Link) `
    text-decoration: none;
    font-weight: 700;
    font-size: 5rem;
    margin: 0.5rem;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    color: whitesmoke;
    transition: all 0.3s ease-in-out;
    
    &:hover {
        background: url(${ props => props.background});
        background-size: cover;
        background-position: center;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-stroke-width: 0px;
        color: transparent;
    }
` 

