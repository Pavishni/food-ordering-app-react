import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Dummy location",
      },
    };
  }

  async componentDidMount() {
    //console.log("Child componentDidMount");
    const data = await fetch("https://api.github.com/users/Pavishni");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    const { avatar_url, name, location } = this.state.userInfo;
    return (
      <div className="m-4 p-2">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
