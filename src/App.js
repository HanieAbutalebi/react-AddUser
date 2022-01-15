import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
function App() {
  const [usersList, setUsersList] = useState([]);
  // to add in userslist
  const addUsersHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    // we use Fragment || React.Fragment(if we do not import fragment) || <> </> (shortcut) which is render empty wrapper
    // Fragment does not render any HTML element to DOM but use az a root element to fullfit react requirement
    <Fragment>
      <AddUser onAddUser={addUsersHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
