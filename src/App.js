import React from "react";

export default class MyApp extends React.Component {

   state = {
      items:  {id:'1',name:'ahmed',age:'31'}
    }
  
  render() {
    return (
       <div>
         {/* Change code below this line */}
         <Navbar items = {this.state.items}/>
         {/* Change code above this line */}
       </div>
    );
  }
};

//child
class Navbar extends React.Component {

  render() {
    const {name,age}=this.props.items

    return (
    <div>
      {/* Change code below this line */}
      <h1>Hello, my name is: {name}</h1>
      {/* Change code above this line */}
      age {age}
    </div>
    );
  }
};