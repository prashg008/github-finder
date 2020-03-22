import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };
  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search users...."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          clear
        </button>
      )}
    </div>
  );
};

export default Search;
