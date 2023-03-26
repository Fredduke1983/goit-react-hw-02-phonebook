import { Component } from 'react';
import { FilterDelBtn } from './contactFilter.styled';

export class ContactFilter extends Component {
  state = {
    props: this.props,
  };

  onFilterContacts(filterContacts) {
    return filterContacts.map(contact => {
      return (
        <li id={contact.id} key={contact.id}>
          {contact.name}: {contact.number}
          <FilterDelBtn onClick={this.props.deleteContact} id={contact.id}>
            delete
          </FilterDelBtn>
        </li>
      );
    });
  }

  render() {
    const { onChangeFilter, filter, filteredContacts, contacts } = this.props;
    return (
      <>
        <input
          placeholder="search"
          onChange={onChangeFilter}
          value={filter}
        ></input>
        <ul>
          {filter
            ? this.onFilterContacts(filteredContacts)
            : this.onFilterContacts(contacts)}
        </ul>
      </>
    );
  }
}
