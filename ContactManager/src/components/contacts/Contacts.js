import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
  // constructor() {  // ---this is optional if we need itialisation
  //   super();       //
  //   this.state = { //

  render() {
    return (
      <Consumer>
        {value => {
          // const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="dispay-4 mb-2">
                <span className="text-danger">Contacts </span>
                List
              </h1>
              {value.contacts.map(contact => (
                <Contact
                  key={contact.id}
                  // name={contact.name}  // if we need individual values
                  // email={contact.email}  // if we need individual values
                  // phone={contact.phone}  // if we need individual values
                  contact={contact}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
