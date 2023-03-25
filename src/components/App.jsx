import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  constructor() {
    super();
    this.filterContacts = [];
  }

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  resetForm() {
    return this.setState({
      name: '',
      number: '',
    });
  }
  onSubmit = e => {
    e.preventDefault();

    this.setState(prev => {
      return {
        contacts: [
          ...prev.contacts,
          { name: this.state.name, id: nanoid(), number: this.state.number },
        ],
      };
    });
    this.resetForm();
  };

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onChangeFilter = e => {
    this.setState({ filter: e.target.value });
    this.filterContacts = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(e.target.value);
    });
  };

  onFiltred(filterContacts) {
    return filterContacts.map(contact => {
      return (
        <li id={contact.id} key={contact.id}>
          {contact.name}: {contact.number}
        </li>
      );
    });
  }

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={this.onChange}
              value={this.state.name}
              required
            />
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={this.onChange}
              value={this.state.number}
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <input onChange={this.onChangeFilter} value={this.state.filter}></input>
        <ul>
          {this.filterContacts.length
            ? this.onFiltred(this.filterContacts)
            : this.onFiltred(this.state.contacts)}
        </ul>
      </>
    );
  }
}

export { App };
