import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <UserClass name={"Kunal Anand"} location={"Dewas"} />
        <UserClass name={"Kunal Anand"} location={"Indore"} />
      </div>
    );
  }
}

export default About;
