import styled from "styled-components";

export const BurgerButton = styled.button`

  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }

  div:first-child {
    width: 2rem;
    transform: ${props =>
        props.active ? "translateY(10px) rotate(-45deg)" : null}; 
    
  }
  div:nth-child(2) {
    width: 1.5rem;
    opacity: ${props => (props.active ? "0" : "1")};
  }
  div:last-child {
    width: ${props => (props.active ? "2rem" : "1rem")};
    transform: ${props =>
        props.active ? "translateY(-11px) rotate(45deg)" : null}; 
  }
  
  div {
    height: 2px;
    /* background-color: ${props => (props.active ? "#fff" : "#000")}; */
    background-color: #000;
    transition: all 0.3s linear;
  }
`;
