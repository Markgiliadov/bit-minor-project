import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Posts from "../Posts/Posts";
import Toolbar from "../Toolbar/Toolbar";
import Users from "../Users/Users";
import stateContext from "../../Contexts/stateContext";
const Routing = () => {
  const { state } = useContext(stateContext);
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <>
              <Toolbar {...props} />
              <Users />
            </>
          )}
        />
        <Route
          exact
          path="/users/:id"
          render={(props) => (
            <>
              <Toolbar {...props} />
              <Posts {...props} />
            </>
          )}
        />
        <Route
          path="/users/website/:id"
          render={(props) => (
            <>
              <Toolbar />
              <h2>you're in {state.name}'s website</h2>
            </>
          )}
        />
        <Route
          path="*"
          render={() => <h3>Sorry this page is not available</h3>}
        />
      </Switch>
    </div>
  );
};

export default Routing;
