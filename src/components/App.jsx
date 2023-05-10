import { Component } from "react"
import { nanoid } from 'nanoid'
import { StyledComponent } from "styled-components";
import { Form } from "./Form/Form";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: '',
  };

  formSubmitHanler = data => {
  console.log(data)
  }
  
  render() {

  
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        fontSize: 40,
        color: '#010101'
      }}
    >
<h1>Phonebook</h1>
      < Form onSubmit={this.formSubmitHanler}
      />
      <h2>Contacts</h2>
    </div>
    );
  }
};