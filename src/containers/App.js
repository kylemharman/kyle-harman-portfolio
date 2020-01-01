import React, {useState} from 'react';
import NavBar from '../components/NavBar'

const App = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenuHandler = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <div>
            <NavBar clicked={toggleMenuHandler} active={openMenu}/>         
        </div>
    );
}

export default App;
