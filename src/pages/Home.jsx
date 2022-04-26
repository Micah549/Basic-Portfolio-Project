import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../routes/Navbar";
import "../themes/Navigation.css";
import "../themes/Home.css";
import codeGuy from  "../Images/19362653.jpg";
import { Grid } from "@mui/material";
import Footer from "../components/Footer";
import creativeVector from "../Images/creativity-vector.svg"

export default function Home() {
	return (
		<div className="App">
			<Navbar />
			<div>
				<h1 className="Heading-h1">Micah Viljoen</h1>
			</div>
			    <div>
			    	<h2 className="Heading-h2">
					Steering efficiency and elegance gracefully, <strong>through Code</strong>
			    	</h2>
			    </div>
                <div>
                    <img src={codeGuy} height="25%" width='100%' alt="Image about a guy coding" ></img>
                </div>
			 {/* start of content area  */}
             <Grid container spacing={3} columns={12}>
                <Grid item sm={9} xl={6}>
                   {/* Col 1  to split in equal width*/}
					<div className="col-color col col-xs-6">
						            <p> Hi</p>
						<p>
							{" "}I am a <strong>Software Developer</strong>, specializing in front end-design and
							UI/UX.
						</p>
						<br />
					</div>
                     </Grid>
                 <Grid item sm={3} xl={6}>
                     {/* Col 2 */}
				    	<div className=" col col-xs-6 "> 
                          <img className='illus-image' src={creativeVector} height="100%" width='100%'></img>
				            </div>
                 </Grid>
            </Grid> 
      
        <Footer/>
			
		</div>

		
	);
}
