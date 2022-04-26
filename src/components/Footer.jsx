import React, { Component } from 'react';
import { Grid } from '@mui/material';
import "../themes/Footer.css";
import { ArrowCircleUp } from '@mui/icons-material';


class Footer extends Component {
    render() { 
        return (
            <div className='App'>
                <footer>
                <Grid container spacing= {3} columns={12}>
                  <Grid item xs={4}>
                     <div>
                         <h1>Contact</h1>
                    <p>Cell: 071 936 0023</p>
                    <p>Email: micah.viljoen@dskTech.com</p>
                    </div>
                </Grid>

                <Grid item xs={4}>
                     <div>
                    <p>&copy;|2022</p>
                    <p>All Right's Reserved</p>
               <p><ArrowCircleUp fontSize="large" color="white" /></p>   
                </div>
                         </Grid>
                <Grid item xs={4}>
                    <h1>Address</h1>
                    <address>14 Caroline Road</address>
                    <address>Haven Hills</address>
                    <address>East London</address>
                </Grid>

                </Grid>
            
                </footer>

            </div>
          );
    }
}
 
export default Footer;