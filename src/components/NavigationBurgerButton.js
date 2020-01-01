import React from 'react'
import {BurgerButton} from '../styles/NavigationBurgerButtonStyled'


export default function NavigationBurgerButton(props) {

    return (
        <BurgerButton onClick={props.clicked} active={props.active}>
           <div></div>
           <div></div>
           <div></div>
        </BurgerButton>
    )
}
