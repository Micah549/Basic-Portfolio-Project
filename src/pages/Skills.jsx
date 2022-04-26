import React from "react";
import {Link, NavLink} from "react-router-dom";
import Navbar from "../routes/Navbar";
import '../themes/Navigation.css';
import java from '../Images/java.jpg'
import html from '../Images/html.jpg';
import react from '../Images/react.jpg';
import '../themes/Skills.css';
import Footer from "../components/Footer";
import JvC from '../Images/Java_Cert.png';
import HtC from '../Images/HTML_Cert.png';
import { Html } from "@mui/icons-material";



export default function Home()
{
 return(
     <div className="App">
          <Navbar/>
         <h1 className="Heading-h1">My Skills</h1>

         <div className="card">
  <img src={java} alt="Javascript image" width='250px' height="75%"/>
  <h1>JavaScript</h1>
  <p className="title"></p>
  <strong>Certified</strong>
  <div className='Social'>
  
    <a href="https://github.com/Micah549"><i className="fa fa-github"></i></a>  
    <a href="https://www.linkedin.com/in/micah-viljoen-6813a0202/"><i className="fa fa-linkedin"></i></a>  
    <a href="https://www.facebook.com/micahkyle.viljoen"><i className="fa fa-facebook"></i></a> 
  </div>
  <p><a className='link' href={JvC}>View Certificate</a></p>

</div>

{/* end of card 1 */}

{/* Card 2 */}
<div className="card">
  <img src={react} alt="react" width='250px' height="75%"/>
  <h1>React</h1>
  <p className="title"></p>
  <strong>Certified</strong>
  <div className='Social'>
    <a href="https://github.com/Micah549"><i className="fa fa-github"></i></a>  
    <a href="https://www.linkedin.com/in/micah-viljoen-6813a0202/"><i className="fa fa-linkedin"></i></a>  
    <a href="https://www.facebook.com/micahkyle.viljoen"><i className="fa fa-facebook"></i></a> 
  </div>
  <p><a className='link' href='#'>View Certificate</a></p>
</div>

{/* End of card 2 */}

{/* Card 3 */}
<div className="card">
  <img src={html} alt="Javascript" width='250px' height="170rem"/>
  <h1>HTML & CSS</h1> 
  <p className="title"></p>
  <strong>Certified</strong>
  <div className='Social'>
    <a href="https://github.com/Micah549"><i className="fa fa-github"></i></a>  
    <a href="https://www.linkedin.com/in/micah-viljoen-6813a0202/"><i className="fa fa-linkedin"></i></a>  
    <a href="https://www.facebook.com/micahkyle.viljoen"><i className="fa fa-facebook"></i></a> 
  </div>
  <p><a className='link' href={HtC}>View Certificate</a></p>
</div>

<Footer/>
     </div>
 )
}