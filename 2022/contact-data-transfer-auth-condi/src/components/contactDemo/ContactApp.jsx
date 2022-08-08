import React, { useState } from "react";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";

const ContactApp = () => {
  const [state, setState] = useState({
    selectedContact: {}
  });

  //recieve function from child
  let recieveContact = (contact) => {
    setState((state) => ({
      //getting the data assigning to obj
      selectedContact: contact
    }));
  };

  //let's destructure
  let { selectedContact } = state;

  return (
    <>
      <pre>{JSON.stringify(selectedContact)} </pre>
      <p className="h3">ContactApp </p>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-9">
            {/* providing function to child cmp to update child data into parent */}
            <ContactList sendContact={recieveContact} />
          </div>
          <div className="col-md-3">
            {/* sending the child response data as props */}
            <ContactCard selectedContact={selectedContact} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactApp;
