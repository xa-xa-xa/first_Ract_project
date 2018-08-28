import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

// import "./contact.css";

class Contact extends Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired
  // }; -- same thing as bellow

  // state = {
  //   // toggling state onClick wiht dedicated funcrtion
  //   showConctactInfo: true // toggling state onClick wiht dedicated funcrtion
  // }; // toggling state onClick wiht dedicated funcrtion

  //  use bind() - inside a function */
  // constructor() { //*****also to bind outside a funtion
  //   super();//*****also to bind outside a funtion
  //   this.state = {};//*****also to bind outside a funtion

  // this.onShowClick = this.onShowClick.bind(this);//*****also to bind outside a funtion
  // }//*****also to bind outside a funtion

  // onShowClick() {
  //   console.log(this.state); /*  use bind() - inside a function */
  //   //*****also to bind outside a funtion
  // }

  // onShowClick = e => { // toggling state onClick wiht dedicated funcrtion
  //   this.setState({ showConctactInfo: !this.state.showConctactInfo }); // toggling state onClick wiht dedicated funcrtion
  // }; // toggling state onClick wiht dedicated funcrtion

  state = {
    showContactInfo: false
  };
  onDeleteClick = (id, dispatch) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        dispatch({ type: 'DELETE_CONTACT', payload: id });
      });
  };

  render() {
    // const { name, email, phone } = this.props;

    const { id, name, email, phone } = this.props.contact;

    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                {` `}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  // name: PropTypes.string.isRequired, // this is optional if we are using single values from ./Contacts.js
  // email: PropTypes.string.isRequired, // this is optional if we are using single values from ./Contacts.js
  // phone: PropTypes.string.isRequired // this is optional if we are using single values from ./Contacts.js
  contact: PropTypes.object.isRequired
};
export default Contact;
