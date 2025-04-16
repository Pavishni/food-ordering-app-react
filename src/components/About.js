import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
     <div>
        <h1>About US</h1>
        <h2>React Training of food ordering site from Swiggy API</h2>
        <User name = {"Pavi"} location = {"Chennai"}/>
        <UserClass name = {"Pavi"} location = {"Chennai"}/>
    </div>
  );
};

export default About;
