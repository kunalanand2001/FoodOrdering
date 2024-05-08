import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <UserClass name={"Kunal Anand"} location={"Dewas"} />
        <div>
          <UserContext.Consumer>
            {(data) => <h1 className="font-bold">{data.loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default About;
