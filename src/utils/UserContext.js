import { createContext } from "react";

export const abc = 1;

const UserContext = createContext({
  loggedInUser: "Kunal Anand",
});

export default UserContext;
