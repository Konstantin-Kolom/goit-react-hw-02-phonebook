import React, { Component } from 'react';

class FilterContact extends Component {
  render() {
    const { value, onchangeFilter } = this.props;
    return (
      <label>
        <input type="text" value={value} onChange={onchangeFilter} />
      </label>
    );
  }
}

export default FilterContact;
