import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount(){
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent render")
    return (
      <div>
        <h1>About US</h1>
        <h2>React Training of food ordering site from Swiggy API</h2>
        <UserClass name={"Pavi"} location={"Chennai"} />
      </div>
    );
  }
}

export default About;
