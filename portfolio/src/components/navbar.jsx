import React from 'react';
import  { Navbar } from 'react-bootstrap';
import Avitar from './avitar';
const NavBar = () => {
  return (
  <Navbar  bg="dark" variant="dark">

    {/* will link to the about section in an auto scroll */}
    <Navbar.Brand href="#home">
      Jared Spears 
    </Navbar.Brand>

      {/* not perfect want avitar on the right side */}
      <container className='justify-content-right'>
        <Avitar/>
      </container> 
       
  </Navbar>
   );
}
 
export default NavBar;