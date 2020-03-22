import React, { useEffect, Fragment, useContext } from "react";
import Spinner from "../layouts/Spinner";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/GithubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  useEffect(() => {
    githubContext.getUser(match.params.login);
    githubContext.getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = githubContext.user;

  if (githubContext.loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable:{" "}
      {{ hireable } ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            {login && (
              <li>
                <strong>Login:</strong>
                {login}
              </li>
            )}
            {blog && (
              <li>
                <strong>Blog:</strong>
                {blog}
              </li>
            )}
            <li>
              <strong>Followers:</strong>
              {followers}
            </li>

            <li>
              <strong>Follownig:</strong>
              {following}
            </li>

            <li>
              <strong>Public Repos:</strong>
              {public_repos}
            </li>
            <li>
              <strong>Public Gists:</strong>
              {public_gists}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge  badge-primary">Followers: {followers}</div>
        <div className="badge  badge-success">Following: {following}</div>
        <div className="badge  badge-light">Public Repos: {public_repos}</div>
        <div className="badge  badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={githubContext.repos} />
    </Fragment>
  );
};

export default User;
