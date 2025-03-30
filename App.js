import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const Title = () => (
    <h1 className="head">
        Hello World!
    </h1>
);


//React functional component - wrap around braces
const HeadingComponent = () => (
    <div id="container">
        <Title />
        {Title()}
        <h1>React</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
// root.render(heading);