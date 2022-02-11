import React from "react";

export default class MyApp extends React.Component {

   state = {
      name: 'CamperBot'
    }
  
  render() {
    return (
       <div>
         {/* Change code below this line */}
         <Navbar name = {this.state.name}/>
         {/* Change code above this line */}
       </div>
    );
  }
};

class Navbar extends React.Component {

  render() {
    return (
    <div>
      {/* Change code below this line */}
      <h1>Hello, my name is: {this.props.name}</h1>
      {/* Change code above this line */}
    </div>
    );
  }
};