import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
  return ( 
    <div>
      <Navbar bg="dark" variant="dark" fixed = 'bottom' className='justify-content-center'>
        <p>This is the Footer Content</p>
        <hr/> {/*this should be done differently but for now it divides it up ok */}
        <p>add links here: github, linkedIn, etc.</p>
      </Navbar>
    </div>
   );
}
 
export default Footer;