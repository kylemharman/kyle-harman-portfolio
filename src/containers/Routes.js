import React from "react";
import { Router } from "@reach/router";
import App from "../containers/App";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

export default function Routes() {
	return (
		<div>
			<App />
			<Router>
				<Home path="/" />
				<About path="/about" />
				<Projects path="/projects" />
				<Contact path="/contact" />
			</Router>
		</div>
	);
}
