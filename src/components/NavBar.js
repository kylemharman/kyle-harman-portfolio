import React from "react";
import { Link } from "@reach/router";
// components
import NavigationBurgerButton from "./NavigationBurgerButton";
import NavigationOverlay from "./NavigationOverlay";
// styles
import { Nav, Logo } from "../styles/NavBarStyled";

export default function NavBar(props) {
    return (
        <header>
            <Nav>
                <React.Fragment>
                    <Link to="/">
                        <Logo>harman.</Logo>
                    </Link>
                </React.Fragment>

                <NavigationOverlay
                    active={props.active}
                    clicked={props.clicked}
                />
                <NavigationBurgerButton
                    clicked={props.clicked}
                    active={props.active}
                />
            </Nav>
        </header>
    );
}
