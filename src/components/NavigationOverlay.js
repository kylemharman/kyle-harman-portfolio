import React from 'react';
import {Link} from '@reach/router';
// styles
import {NavigationOverlayNav , StyledNavLink} from '../styles/NavigationOverlayStyled';

const NavigationOverlay = (props) => {

    return (
        <NavigationOverlayNav active={props.active} onClick={props.clicked}>
            <StyledNavLink to="/" background="https://images.unsplash.com/photo-1568160277762-0224a391b5a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=939&q=80">Home.</StyledNavLink>
            <StyledNavLink to="/about" background="https://images.unsplash.com/photo-1554188248-986adbb73be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80">About.</StyledNavLink>
            <StyledNavLink to="/projects" background="https://images.unsplash.com/photo-1565855991995-7a5ceb19ee95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80">Projects.</StyledNavLink>
            <StyledNavLink to="/contact" background="https://images.unsplash.com/photo-1564089957880-517edea1afc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80">Contact.</StyledNavLink>
            <div>
                <p>Connect </p>
                <ul>
                    <li><Link to="#"><i className="fab fa-github fa-lg"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-linkedin-in fa-lg"></i></Link></li>
                </ul>
            </div>
            
        </NavigationOverlayNav>
         
    )
}

export default NavigationOverlay;


