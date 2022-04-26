import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../routes/Navbar";
import '../themes/Navigation.css'
import Footer from "../components/Footer";
import { Avatar } from "@mui/material";
import profileImage from '../Images/micah-profile-image.jpg';
import programmer from "../Images/programmer-image.svg";
import { Grid } from "@mui/material";
import "../themes/About.css";

export default function About()
{
 return(
     <div className="App">
         <Navbar/>
         <h1 className="Heading-h1">About</h1>
        {/* Content Area */}
        
         <Grid container spacing={2} rowGap={3} columns={12}>
                <Grid className="gridStyling" item sm={9} xl={6} >
                   {/* Col 1  to split in equal width*/}
                        <p className='Content-p'>I am a passionate, tenacious, ambitious and aspiring young 
                            Intern Developer at DSK Technologies. 
                            My personal drive for development extends beyond the boundaries of familiarizing myself with coding languages 
                            but utilizing it to be part of the possible team who can be 
                            the catalyst for solutions and transferring the principles and knowledge gained, 
                            to future young people as myself to bring the dynamic change.</p>
                     </Grid>
                 <Grid item sm={3} xl={6} md= {4} >
                     {/* Col 2 */}
				    	<div> 
                            <Avatar className='gridStyling animateAvatar' src={profileImage} sx={{width:140, height:160}} alt='Micah Viljoen'></Avatar>
				            </div>
                 </Grid>
            </Grid> 
                    <div>
                        <img src={programmer} alt="programmer image" width='100%' height='300px'/>
                    </div>

        
         <Footer/>
     </div>
 )
}