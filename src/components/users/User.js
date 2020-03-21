import React, { useEffect, Fragment } from "react";
import Spinner from "../layouts/Spinner";
import Repos from "../repos/Repos";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user, loading, getUser, getUserRepos, repos, match }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
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
    follownig,
    public_repos,
    public_gists
    // hireable
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      {/* Hireable:{" "}
      {{ hireable } ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )} */}
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
            {follownig && (
              <li>
                <strong>Follownig:</strong>
                {follownig}
              </li>
            )}
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
        <div className="badge  badge-success">Follownig: {follownig}</div>
        <div className="badge  badge-light">Public Repos: {public_repos}</div>
        <div className="badge  badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

User.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired
};

export default User;
