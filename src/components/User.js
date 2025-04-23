import { useState } from "react";

const User = (props) => {
    const count = useState(0);
    const count2 = useState(2);
    return (
        <div className="aboutCard">
            <h1>Count: {count}</h1>
            <h2>Count2: {count2}</h2>
            <h2>Name: {props.name}</h2>
            <h3>Location: {props.location}</h3>
        </div>
    )
}

export default User;