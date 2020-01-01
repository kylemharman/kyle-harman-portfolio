import styled from 'styled-components';
import {Link} from '@reach/router'

export const NavigationOverlayNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s ease-in-out;
  transform: ${props => (props.active ? "translateX(0%)" : "translateX(+100%)")};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 45vh;
    right: 10px;
    
  }

  p {
    transform: rotate(90deg);   
  }

  ul {
    margin: 10px;
    padding: 0;
    text-decoration: none;
    list-style: none;

    & li {
      margin: 10px;
    }
  }
`

export const StyledNavLink = styled(Link) `
    text-decoration: none;
    font-weight: 700;
    font-size: 5rem;
    margin: 0.5rem;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    color: white;
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

