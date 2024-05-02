import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
    // console.log("about constructor");
  }
  componentDidMount() {
    // console.log("about componentDidMount");
  }
  render() {
    // console.log("about render");
    return (
      <div>
        <UserClass name={"Kunal Anand"} location={"Dewas"} />
        <UserClass name={"Kunal Anand"} location={"Indore"} />
      </div>
    );
  }
}

export default About;
