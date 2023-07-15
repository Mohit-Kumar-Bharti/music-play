// Filename: App.js
import React, { useState } from "react";

import List from "./List";
import Music from "./Music";

function App() {
  const [showNewComponent, setShowNewComponent] = useState(false);
  const [index, setIndex] = useState(-1);

  const [users, setUsers] = useState([
    {
      name: "Agar tum mil jaao",
      singer: "Shreya Ghoshal",
    },
    {
      name: "Mere dholna",
      singer: "Shreya Ghoshal",
    },
    {
      name: "Ye ishq haaye",
      singer: "Shreya Ghoshal",
    },
  ]);

  const handlechange = (index) => {
    // newUsers[index].name = "New Name";
    // newUsers[index].rollNo = "New RollNo";
    // setUsers(newUsers);
    console.log("i am clicked");
    setShowNewComponent(true);
    setIndex(index);
    // return <Music />;
  };

  if (showNewComponent) {
    // setShowNewComponent(!showNewComponent);
    // console.log(newUsers);
    const newUsers = [...users];
    console.log(newUsers);
    console.log(index, "Inside main js");
    return <Music songs={[...newUsers]} index={index} />;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        height: "auto",
        margin: "30px",
        backgroundColor: "#000",
        padding: "20px",
      }}
    >
      <h4>Rendering List of components with array of data</h4>

      {users.map((Users, index) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              width: "80%",
              margin: "10px auto",
              backgroundColor: "#000",
              cursor: "pointer",
              fontSize: "20px",
            }}
            onClick={() => {
              handlechange(index);
            }}
            key={index}
          >
            <List key={index} name={Users.name} rollNo={Users.rollNo} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
