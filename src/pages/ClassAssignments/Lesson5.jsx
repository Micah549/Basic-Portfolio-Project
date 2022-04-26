import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Navbar from "../../routes/Navbar";
import Footer from "../../components/Footer";
import '../../themes/Lesson5.css';
import CounterFunc from './CounterFunc';
import Main from './Main';





/*
I have chosen to use a class component because I am able to use a constructor to pass properties and a functional component includes only javascript.
A class component is a stateful component 
and based on my requirements i need to work with the state of the components as it implements logic
as opposed to Functional components that are stateless as it only accepts and displays data.
A class component will allow me to extend through rendering using a (render function)
Based on my requirement I need to incorporate a component that accepts props to perform a function.

*/

// fetch('https://jsonplaceholder.typicode.com/albums/')
// .then(response => response.json())

//   .then(json => {

//          console.log(json)

// })

export default class Lesson5 extends React.Component {
    constructor(props){
        super(props);
        this.state={
            curr:0
        }
        console.log("PROPS", this.props);
    }

    updateCount(){
        let newCount = this.state.curr;
        this.setState({curr: newCount + 1});
        console.log("Updates the Count by increasing it", this.state.curr)
    }

    


    DecreaseCount(){
        let newCount = this.state.curr;
        this.setState({curr: newCount - 1});
        console.log("Decreases the Count", this.state.curr)
    }

    render() { 
        return <div className='App'>
            <>
            <Navbar/>
            </>
            <h3 className='Heading-h1'>Assignment: Lesson 5</h3>
            
            <CounterFunc currcount= {this.state.curr} />
            <button onClick={()=> this.updateCount()}>Increase</button>
            <button onClick={()=> this.DecreaseCount()}>Decrease</button>
        </div>
    }
}
 

  


 