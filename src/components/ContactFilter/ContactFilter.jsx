import { Component } from 'react';

export class ContactFilter extends Component {
  state = {
    props: this.props,
  };

  onFilterContacts(filterContacts) {
    return filterContacts.map(contact => {
      return (
        <li id={contact.id} key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={this.props.deleteContact} id={contact.id}>
            delete
          </button>
        </li>
      );
    });
  }

  render() {
    const { onChangeFilter, filter, filteredContacts, contacts } = this.props;
    return (
      <>
        <input onChange={onChangeFilter} value={filter}></input>
        <ul>
          {filter
            ? this.onFilterContacts(filteredContacts)
            : this.onFilterContacts(contacts)}
        </ul>
      </>
    );
  }
}
