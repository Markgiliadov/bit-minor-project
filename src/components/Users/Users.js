import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Users.module.css";
import stateContext from "../../Contexts/stateContext";
import Spinner from "../Spinner/Spinner";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(stateContext);
  useEffect(() => {
    localStorage.removeItem("name");
    dispatch({ type: "showUsers" });
    getUsersData();
  }, []);
  const getUsersData = async () => {
    setLoading(true);
    const myData = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((newData) => newData);
    setUsers(() => {
      setLoading(false);
      return myData;
    });
  };
  return (
    <div className={classes.container}>
      <Spinner loading={loading} />
      {users.map((user) => (
        <div key={user.id} className={classes.userContainer}>
          <>
            <NavLink
              onClick={() => {
                localStorage.setItem("name", user.name);
                dispatch({ type: "showPosts", payload: { name: user.name } });
              }}
              to={`/users/${user.id}`}
              style={{ textDecoration: "none" }}
            >
              <h2 className={classes.h2}>{user.name}</h2>
            </NavLink>
            <p className={classes.p}>
              City: {user.address.city}
              <br />
              Street: {user.address.street}
              <br />
              Phonenumber: {user.phone}
              <br />
              Link to website:
              <NavLink
                onClick={() => {
                  dispatch({
                    type: "showWebsite",
                    payload: { name: user.name },
                  });
                }}
                to={`/users/website/${user.website}`}
              >
                {user.website}
              </NavLink>
              <br />
              {user.company.name} inc.
            </p>
          </>
        </div>
      ))}
    </div>
  );
};

export default Users;
