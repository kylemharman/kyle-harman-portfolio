import React, { useState } from "react";
import NavBar from "../components/NavBar";

const App = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenuHandler = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <React.Fragment>
            <NavBar clicked={toggleMenuHandler} active={openMenu} />
        </React.Fragment>
    );
};

export default App;
