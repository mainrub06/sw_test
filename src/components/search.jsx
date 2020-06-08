import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSearchChange = this.handleSearchChange.bind(this);

    this.state = {
      isValidValue: true,
    };
  }

  handleSearchChange(evt) {
    const { findPersonByName } = this.props;
    evt.preventDefault();
    const searchValue = evt.target.value.toLowerCase();

    if (/[a-zA-Z]/.test(searchValue) || searchValue === ``) {
      this.setState({ isValidValue: true });
      findPersonByName(searchValue);
    } else {
      this.setState({ isValidValue: false });
    }
  }

  render() {
    const { isValidValue } = this.state;
    return (
      <div className="search">
        {!isValidValue && <p className="search-wrong">Only english</p>}
        <input onChange={this.handleSearchChange} type="search" placeholder="Search" />
      </div>
    );
  }
}

Search.propTypes = {
  findPersonByName: PropTypes.func.isRequired
}

export default Search;
