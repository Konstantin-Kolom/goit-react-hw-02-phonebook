import React, { Component } from 'react';

class Contacts extends Component {
  render() {
    return (
      <ul>
        {this.props.stateApp.map(({ id, name, number }) => (
          <li className="" key={id} id={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button type="button" onClick={() => this.props.onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Contacts;
