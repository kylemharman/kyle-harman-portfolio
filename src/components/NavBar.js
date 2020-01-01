import React from 'react';
// components
import NavigationBurgerButton from './NavigationBurgerButton';
import NavigationOverlay from './NavigationOverlay';
// styles
import {Nav} from '../styles/NavBarStyled';

export default function NavBar(props) {
    
    return (
        <header>
            <Nav>
                <React.Fragment>
                    <h1>harman.</h1>
                </React.Fragment>
                
                <NavigationOverlay active={props.active} clicked={props.clicked}/>
                <NavigationBurgerButton clicked={props.clicked} active={props.active}/>
            </Nav>
        </header>
    )
}
