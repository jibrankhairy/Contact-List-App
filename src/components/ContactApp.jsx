import React from "react";
import ContactList from "./ContactList";
import { data } from "../utils/data";
import ContactInput from "./ContactInput";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.getContactsFromLocalStorage() || data(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }

  getContactsFromLocalStorage() {
    const contacts = localStorage.getItem("contacts");
    return contacts ? JSON.parse(contacts) : null;
  }

  
  saveContactsToLocalStorage(contacts) {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }

  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts });
    this.saveContactsToLocalStorage(contacts);
  }

  onAddContactHandler({ name, tag, imageUrl }) {
    this.setState((prevState) => {
      const newContacts = [
        ...prevState.contacts,
        {
          id: +new Date(),
          name,
          tag,
          imageUrl,
        },
      ];
      this.saveContactsToLocalStorage(newContacts); 
      return { contacts: newContacts };
    });
  }

  render() {
    return (
      <div className="contact-app">
        <h1>Contacts</h1>
        <h2>Add Contact</h2>
        <ContactInput addContact={this.onAddContactHandler} />
        <h2>Contact List</h2>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default ContactApp;
