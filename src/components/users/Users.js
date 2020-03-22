import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layouts/Spinner";
import GithubContext from "../../context/github/GithubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);

  if (githubContext.loading) {
    return <Spinner />;
  } else {
    return (
      <div style={UsersStyle}>
        {githubContext.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const UsersStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)"
};

export default Users;
