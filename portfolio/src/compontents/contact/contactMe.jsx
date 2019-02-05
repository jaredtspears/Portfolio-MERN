// this will be the form that will store contact info from interested
//parties, upon submission will trigger the nodemailer component

import React from 'react';
import NodeMailer from './nodeMailer';

function trigger(){
  if('.nodeMailerTrigger' === true){
  
  }
}
const Contact = () => {
  return ( 
    <div>
      <p>form content will go here: 
        Must call nodeMailer upon submission of the form</p>

      <button >Submit</button>
    </div>
   );
}
 
export default Contact;