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
        <div className="ml-4 p-4">
          <UserContext.Consumer>
            {(data) => (
              <h1 className="font-bold italic">
                Logged In User Name : {data.loggedInUser}
              </h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass name={"Kunal Anand"} location={"Dewas"} />
      </div>
    );
  }
}

export default About;
