import React, { Component } from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'; 
import {AllRoutesList} from "./AllRoutesList";

function GenerateMap(value){
return <Route exact path = {value.path}  key={value} element= {value.comp}/>
}
//function (){} //map, filter
//const b =() =>{}
class Routing extends Component{
    render()
     {
            return(
               <Router>
                <Routes>
                    {
                        //array   //js function
                    AllRoutesList.map((value) => GenerateMap(value))
                    
                    /*inline version: {value}=> {return <Route exact path = {value.path} element= {value.comp}/>
                    */

                    }
                   
                </Routes>
                </Router>
                  )
        } 
}
export default Routing;

//code for before we did arrow function
/*{ <Route exact path ='/' element={<Home/>}></Route>
<Route exact path ='/about' element={<About/>}></Route>
<Route exact path ='/contact' element={<Contact/>}></Route>
<Route exact path ='/projects' element={<Projects/>}></Route>
<Route exact path ='/skills' element={<Skills/>}></Route> }*/