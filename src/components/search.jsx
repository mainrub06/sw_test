import React, { PureComponent } from "react";

class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  handleSearchChange(evt) {
    const { persons } = this.props;
    evt.preventDefault();
    const newArr = persons.filter((person) => {
      return person.name.toLowerCase().includes(evt.target.value.toLowerCase());
    });
    console.log(newArr);
  }

  render() {
    return (
      <div className="search">
        <input
          onChange={this.handleSearchChange}
          type="search"
          placeholder="Search"
        />
      </div>
    );
  }
}

export default Search;
