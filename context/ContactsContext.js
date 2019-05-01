import React from "react";

// import { contacts } from "../constants/contacts";
import {
  updateContactService,
  postContactService,
  getContactsService,
  getContactService,
  deleteContactService
} from "../services/contacts";

const ContactsContext = React.createContext();

const { Consumer } = ContactsContext;

class ContactsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      contacts: {
        ids: [],
        data: {}
      }
    };
  }
  handleFetchContacts = () => {
    this.setState({
      isLoading: true
    });
    getContactsService().then(contacts => {
      this.setState({
        isLoading: false,
        contacts: {
          ids: contacts.map(({ id }) => id),
          data: contacts.reduce((data, contact) => {
            data[contact.id] = contact;
            return data;
          }, {})
        }
      });
    });
  };
  handleSaveContact = contact => {
    this.setState({
      isLoading: true
    });
    if (contact.id) {
      updateContactService(contact).then(updatedContact => {
        this.setState({
          isLoading: false,
          contacts: {
            ...this.state.contacts,
            data: {
              ...this.state.data,
              [updatedContact.id]: {
                ...updatedContact
              }
            }
          }
        });
      });
    } else {
      postContactService(contact).then(newContact => {
        this.setState({
          isLoading: false,
          contacts: {
            ids: [...this.state.contacts.ids, newContact.id],
            data: {
              ...this.state.contacts.data,
              [newContact.id]: {
                ...newContact
              }
            }
          }
        });
      });
    }
  };
  handleFetchContact = id => {
    this.setState({
      isLoading: true
    });
    getContactService(id).then(contact => {
      this.setState({
        isLoading: false,
        contacts: {
          ...this.state.contacts,
          ids: this.state.contacts.ids.includes(contact.id)
            ? this.state.contacts.ids
            : [...this.state.contacts.ids, contact.id],
          data: {
            ...this.state.data,
            [contact.id]: {
              ...contact
            }
          }
        }
      });
    });
  };
  // handleDeleteContact = id => {
  //   this.setState({
  //     isLoading: true
  //   });
  //   deleteContactService(id).then(contact => {
  //     const { [contact.id]: _, ...others } = this.state.contacts.data;
  //     this.setState({
  //       isLoading: false,
  //       contacts: {
  //         ids: this.state.contacts.ids.filter(id => id !== contact.id),
  //         data: { ...others }
  //       }
  //     });
  //   });
  // };
  getContactById = id => this.state.contacts.data[id];
  getContacts = () => this.state.contacts.ids.map(id => this.state.contacts.data[id]);
  render() {
    const { children } = this.props;
    return (
      <ContactsContext.Provider
        value={{
          state: this.state,
          actions: {
            fetchContacts: this.handleFetchContacts,
            fetchContact: this.handleFetchContact,
            saveContact: this.handleSaveContact,
            deleteContact: this.handleDeleteContact
          },
          selectors: {
            getContactById: this.getContactById,
            getContacts: this.getContacts
          }
        }}
      >
        {children}
      </ContactsContext.Provider>
    );
  }
}

export { ContactsProvider as Provider, Consumer, ContactsContext as Context };
