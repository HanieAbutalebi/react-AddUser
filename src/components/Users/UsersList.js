import React from "react";
import Card from "../UI/Card"; //use Card component to wrap <ul>
import classes from "./UsersList.module.css";
// Create List of users
const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {/* users is an array of user objects and each object has name and age */}
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;
