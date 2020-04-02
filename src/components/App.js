import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import  Hog  from './Hog'

class App extends Component {
  state={
    filter: false
  }
  sortByNameAndWeight =()=>{
    let alpByName = hogs.sort((a, b) => a.name > b.name ? 1 : -1) 
   
    return alpByName.sort
  }
  displayRegularHog=()=>{
   return( 
    <div>
      {hogs.map((hog, index) => 
        <div>
          <Hog key={index}  hog={hog}/>
        </div>) }
    </div> 
      )

  }

  displayGreasedHog=()=>{
    return (
      <div>
        {hogs.map((hog, index) => {
          if (!hog.greased) {
            return <div><Hog key={index} hog={hog} /></div>
          }
        })}
      </div>
    )
  }
  handleClick=()=>{
    this.setState({filter: !this.state.filter})
  }
  render() {
    return (
      <div className="App" className="ui grid container">
        <Nav />
        <HelloWorld />
        <button onClick={this.handleClick}>{this.state.filter ? 'Click for not Greased' : 'Click for Greased'}</button>
        {this.state.filter? this.displayRegularHog() : this.displayGreasedHog()}
     </div>
    );
  }
}

export default App;
