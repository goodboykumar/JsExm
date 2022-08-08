import React, { useState } from "react";
import ContactService from "./services/ContactService";

const ContactList = (props) => {
  //getting the props function to send from child to parent
  const [state, setState] = useState({
    contacts: ContactService.getContactList()
  });

  let clickContact = (contact) => {
    //check line-35 for providing selected row
    //now we have to send the selected row data to parent
    // alert(JSON.stringify(contact))
    //calling the function
    props.sendContact(contact);
  };

  //let's destructure
  let { contacts } = state.contacts;

  return (
    <>
      <pre> {JSON.stringify(state.contacts.contacts)}</pre>
      <table className="table table-hover table-striped text-center">
        <thead>
          <tr className="bg-dark text-white">
            <td> Id</td>
            <td> Name</td>
            <td> Email</td>
            <td> Mobile</td>
            <td> Title </td>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 &&
            contacts.map((contact) => {
              return (
                // providing function to get particular obj
                <tr key={contact.id} onClick={() => clickContact(contact)}>
                  <td>{contact.id.substr(contact.id.length - 3)} </td>

                  <td>{contact.name} </td>
                  <td>{contact.email} </td>
                  <td>{contact.mobile} </td>

                  <td>{contact.title} </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default ContactList;
