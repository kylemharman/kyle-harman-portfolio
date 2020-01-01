import React from 'react';
// styles
import {NavigationOverlayNav , StyledNavLink} from '../styles/NavigationOverlayStyled';

const NavigationOverlay = (props) => {

    return (
        <NavigationOverlayNav active={props.active} onClick={props.clicked}>
            <StyledNavLink to="/" background="https://images.unsplash.com/photo-1507561152-ed3719ac59f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80">Home.</StyledNavLink>
            <StyledNavLink to="/about" background="https://images.unsplash.com/photo-1554188248-986adbb73be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80">About.</StyledNavLink>
            <StyledNavLink to="/projects" background="https://images.unsplash.com/photo-1565855991995-7a5ceb19ee95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80">Projects.</StyledNavLink>
            <StyledNavLink to="/contact" background="https://images.unsplash.com/photo-1568160277762-0224a391b5a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=939&q=80">Contact.</StyledNavLink>
        </NavigationOverlayNav> 
    )
}

export default NavigationOverlay;