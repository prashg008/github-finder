import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchUser: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUser(this.state.text);
    this.setState({ text: "" });
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search users...."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
