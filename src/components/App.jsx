import { nanoid } from 'nanoid'

import { Component } from "react";
import { Form } from "./form";
import { Contacts } from "./contacts.jsx";
import { Filter } from "./filter";


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }
  setContacts = (name, number) => {
    console.log(this.state.contacts.length)
    this.setState({
      contacts: [...this.state.contacts, { name, number, id: nanoid() }],

    })
  }

  handleChange = evt => {
    this.setState({ filter: evt.target.value });
  };
  handelDelete = (id) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      }
    })
  }
  componentDidUpdate(prevProps, prevState,) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      const allContacsLocalStorige = JSON.stringify(this.state.contacts);
      console.log(allContacsLocalStorige)
      localStorage.setItem('contact', allContacsLocalStorige)
    }
  }

  render() {
    const fileredContacts = !this.state.filter ? this.state.contacts : this.state.contacts.filter(({ name }) => name.toLowerCase().includes(this.state.filter))
    return (
      <div>
        <h1>Phonebook</h1>
        <Form setContacts={this.setContacts} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} inputFilterArray={this.handleChange} />
        <Contacts contacts={fileredContacts} handelDelete={this.handelDelete} />

      </div >
    );
  }

};
