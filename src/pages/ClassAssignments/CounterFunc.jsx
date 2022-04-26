import React, { Component } from "react";



export default class CounterFunc extends Component {
  constructor(props) {
    super(props);

    console.log("The list of info is displayed", this.props);
  }

  componentDidMount() {
    // console.log("this will be called second but only once, if setting state here be sure to check for looping ");
  }

  //   Predefined props and results
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("A new value has occured ", this.props, nextProps); //nextState, nextContext

    if (this.props !== nextProps) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate() {
    console.log("New Value");
  }

  componentWillUnmount() {
    // console.log("Called when component is about to be destroyed, saving data based on actions o ");
  }

  render() {
    return (
      <div>
      <h2> The Display  </h2>
        <h1>{this.props.currcount.toString()}</h1>
      </div>
    );
  }
}
