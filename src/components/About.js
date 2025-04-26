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
      <div className="bg-cover bg-linear-to-r from-gray-200 to-gray-400">
        <h1 className="font-bold text-4xl m-6">About US</h1>
        <h2 className="font-semibold m-4 p-2">React Training of food ordering site from Swiggy API</h2>
        <UserClass name={"Pavi"} location={"Chennai"} />
      </div>
    );
  }
}

export default About;
