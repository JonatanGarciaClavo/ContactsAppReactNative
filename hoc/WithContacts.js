import React from "react";

import * as ContactsContext from "../context/ContactsContext";

const WithContacts = Component => props => (
  <ContactsContext.Consumer>
    {({ state, actions, selectors }) => (
      <Component {...props} {...state} {...actions} {...selectors} />
    )}
  </ContactsContext.Consumer>
);

export default WithContacts;
