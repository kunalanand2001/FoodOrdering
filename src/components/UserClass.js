// class based component.
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // console.log(this.props.name + " constructor")
    super(props);

    this.state = {
      userInfo: {
        name: props.name,
        location: props.location,
      },
    };
  }

  async componentDidMount() {
    // console.log(this.props.name + " componentDidMount")

    const data = await fetch("https://api.github.com/users/kunalanand2001");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  //   componentDidUpdate(){
  //     console.log("this.componentDidMount called");
  //   }

  render() {
    // console.log(this.props.name + " render")
    const { name, location, avatar_url, login } = this.state.userInfo;
    // debugger;
    return (
      <div className="user-card">
        <img className="profile-pic" src={avatar_url} />
        <h3>Name: {name} </h3>
        <p>Location: {location}</p>
        <p>Github: {login}</p>
      </div>
    );
  }
}

export default UserClass;
