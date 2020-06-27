import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Toolbar.module.css";
import stateContext from "../../Contexts/stateContext";
const Toolbar = () => {
  const { state, dispatch } = useContext(stateContext);
  const backButton = (
    <NavLink
      onClick={() => {
        dispatch({ type: "showUsers" });
        localStorage.removeItem("name");
      }}
      className={classes.backButton}
      to={"/"}
    >
      Back to users
    </NavLink>
  );

  return (
    <>
      <div className={classes.linksContainer}>
        <div className={classes.pageName}>
          {state.showPosts ? <>{state.name}'s </> : null}
          {state.pageName}
        </div>
        {state.showWebsite ? (
          <NavLink
            onClick={() => {
              dispatch({ type: "showUsers" });
            }}
            className={classes.backButton}
            to={"/"}
          >
            Back to users
          </NavLink>
        ) : state.showPosts ? (
          <>{backButton}</>
        ) : (
          <p>Press on a user to see his posts!</p>
        )}
      </div>
    </>
  );
};
export default Toolbar;
