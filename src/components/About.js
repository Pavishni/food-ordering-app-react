import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import Usercontext from "../utils/UserContext.js";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent render");
    return (
      <div className="bg-cover bg-linear-to-r from-gray-200 to-gray-400">
        <h1 className="font-bold text-4xl m-6">About US</h1>
        <h3 className="font-semibold m-4 p-2">
          User logged in
          <Usercontext.Consumer>
            {({loggedInUser}) => <p>{loggedInUser}</p>}
          </Usercontext.Consumer>
        </h3>
        <h2 className="font-semibold m-4 p-2">
          React Training of food ordering site from Swiggy API
        </h2>
        <UserClass name={"Pavi"} location={"Chennai"} />
      </div>
    );
  }
}

export default About;
