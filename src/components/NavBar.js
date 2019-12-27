import React from 'react'
import { Link } from "@reach/router";

export default function NavBar() {
    return (
        <header>
            <nav>
                <React.Fragment>
                    <h5>KH.</h5>
                </React.Fragment>
                <React.Fragment>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </React.Fragment>
            </nav>
        </header>
    )
}
