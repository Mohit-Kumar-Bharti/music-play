// Filename: List.jsx
import React from "react";
import "./Border.css";

const List = (props) => {
  return (
    <div className="hover-effect">
      <p style={{ verticalAlign: "center" }}> {props.name}</p>
      {/* <p style={{ verticalAlign: "center" }}>
        Roll number of student {props.rollNo}
      </p> */}
    </div>
  );
};

export default List;
