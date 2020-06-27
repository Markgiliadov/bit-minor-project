import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = (props) => {
  return (
    <ClipLoader
      css={{ marginLeft: "40%", marginTop: "20%" }}
      size={150}
      color={"#123abc"}
      loading={props.loading}
    />
  );
};
export default Spinner;
