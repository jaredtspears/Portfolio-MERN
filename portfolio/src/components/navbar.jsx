import React from 'react';
import  { Navbar } from 'react-bootstrap';
import Avitar from './avitar';
const NavBar = () => {
  return (
  <Navbar  bg="dark" variant="dark">

    {/* will link to the about section in an auto scroll */}
    <Navbar.Brand href="#home">
      <h1>Jared Spears</h1>
    </Navbar.Brand>
      <hr/>
      {/* not perfect want avitar on the right side */}
        <Avitar/>
      
  </Navbar>
   );
}
 
export default NavBar;