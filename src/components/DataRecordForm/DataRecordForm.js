import React, { Component } from 'react';

class DataRecordForm extends Component {
  state = {
    name: '',
    number: '',
  };

  hendleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  hendleSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '', id: '' });
  };

  render() {
    return (
      <form onSubmit={this.hendleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            // value={this.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder="Enter contact name"
            required
            onChange={this.hendleChange}
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            // value={this.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            placeholder="Enter contact number"
            required
            onChange={this.hendleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default DataRecordForm;
