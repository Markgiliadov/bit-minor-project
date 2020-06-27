import React, { useReducer } from "react";
import stateContext from "./Contexts/stateContext";
import Routing from "./components/Routing/Routing";
import classes from "./App.module.css";
const reducer = (state, action) => {
  switch (action.type) {
    case "showUsers": {
      return {
        showWebsite: false,
        showPosts: false,
        pageName: "Users",
        name: "NoneAgain",
      };
    }
    case "showWebsite": {
      return {
        showWebsite: true,
        showPosts: false,
        pageName: `${action.payload.name}'s Personal Website`,
        name: action.payload.name,
      };
    }
    case "showPosts":
      {
        return {
          showWebsite: false,
          showPosts: true,
          pageName: "Posts",
          name: action.payload.name,
        };
      }
      break;
    default:
      return {
        showWebsite: false,
        showPosts: "null",
        pageName: "",
        name: "",
      };
  }
};
const App = (props) => {
  const initialState = {
    showWebsite: false,
    showPosts: false,
    pageName: "Users",
    name: "none",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <stateContext.Provider value={{ state, dispatch }}>
      <div className={classes.App}>
        <Routing />
      </div>
    </stateContext.Provider>
  );
};

export default App;
