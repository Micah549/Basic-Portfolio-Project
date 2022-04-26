import React, { PureComponent } from 'react';
import {Link} from "react-router-dom";
import Navbar from '../routes/Navbar';
import { Icon } from '@mui/material';
import '../../src/themes/Contact.css';
import contact from '../Images/contact.svg'

export default function Contact ()
{
    return(
        <div className='App'>
       
             <Navbar/>
             <h1 className="Heading-h1">Get in Touch</h1>
             <div>
             <div className="container">

 <form className="form">

    <div className="name">

       <label for="firstName">First name</label>
       <input
            type="text"
            name="firstName"
            className="firstName"
            tabIndex="1"
       />
       <label for="lastName">Last name</label>
       <input
            type="text"
            name="lastName"
            className="lastName"
            tabIndex="2"
       />
    </div>

    <br/>
    <label for="email">Email</label>
<input
     type="email"
     name="email"
     id="email"
     className="email"
     placeholder="example@corp.com"
     tabIndex="3"
/>
<br/>
<br/>
<label for="message">Message</label>

<textarea
  placeholder="Start typing..."
  className="message"
  name="message"
/>
<br/>
<button type="submit" className="send">Send</button>

 </form>
</div>
<div>
    <img src={contact} height='10%' width="100%" alt="contact image" />
</div>
             </div>

        </div>
    )
}