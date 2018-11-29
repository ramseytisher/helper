import styled from 'styled-components';

export const NavigationBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  background-color: yellow;
  width: 100%;
`;

export const MenuButton = styled.button`
  display: none;  

  @media (max-width: 400px) {
    display: block;
    background-color: none;
    border: none;
    cursor: pointer;
  }
`;

export const NavigationDrawer = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  width: 50%;
  background-color: red;
`;

export const NavigationMask = styled.button`
  position: absolute;
  right: 0;
  height: 100%;
  width: 50%;
  border: none;
  background-color: grey;
  opacity: 0.5;
`;