import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    return (
        <div className="res-card">
            <img
                className="res-logo"
                src="https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg?semt=ais_hybrid">
            </img>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.rating}</h4>
        </div>
    );
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="ABC foods" cuisine ="South Indian, North Indian" rating = "4.5 stars" />
                <RestaurantCard resName="TFC foods" cuisine ="North Indian" rating = "4.3 stars" />
                <RestaurantCard resName="Test foods" cuisine ="Chinese North Indian" rating = "4.4 stars" />
                <RestaurantCard resName="Pav foods" cuisine ="South Indian, North Indian" rating = "4.6 stars" />
            </div>
        </div>
    )
}


const AppLayout = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
// root.render(heading);