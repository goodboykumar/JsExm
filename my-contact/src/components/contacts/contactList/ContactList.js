import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import { ContactService } from "../../services/ContactService";
import Spinner from "../../spinner/Spinner";

const ContactList = () => {
  const [query, setQuery] = useState({
    text: ""
  });

  const [state, setState] = useState({
    loading: false,
    contacts: [],
    filterContacts: [], //here storing all the search contact
    errorMessage: ""
  });

  useEffect(() => {
    const asyncFn = async () => {
      try {
        setState({
          ...state,
          loading: true
        });
        let response = await ContactService.getAllContacts();
        //console.log(response.data,"it is getting all data");
        setState({
          ...state,
          loading: false,
          contacts: response.data,
          filterContacts: response.data //it needed here also
        });
      } catch (error) {
        setState({
          ...state,
          loading: false,
          errorMessage: `oops something wrong!`
        });
      }

    };
    asyncFn();
  }, []);

  //delete function
  let clickDelete = async (contactId) => {
    try {
      let response = await ContactService.deleteContact(contactId);
      //after deletion again fetch the latest data so
      // -----------------------------IMP----------------------
      if (response) {
        setState({
          ...state,
          loading: true
        });
        let response = await ContactService.getAllContacts();
        console.log(response.data);
        setState({
          ...state,
          loading: false,
          contacts: response.data,
          filterContacts: response.data //it needed here also
        });
      }
    } catch (error) {
      setState({
        ...state,
        loading: false,
        errorMessage: `oops something wrong!`
      });
    }
  };

  //search contacts
  const searchContacts = (event) => {
    setQuery({...query, text : event.target.value });
    //getting the filter searched contact here
    let theContacts = state.contacts.filter(contact => {
      // in search string whether you type it will convert to lowercase and apply cond
      return contact.name.toLowerCase().includes(event.target.value.toLowerCase());
     
    });
    console.log(theContacts, "it is the filtered data");
    setState({
      ...state,
      filterContacts: theContacts
    });
  };

  let { loading, contacts, errorMessage, filterContacts } = state;

  // itsClicked
  return (
    <>
      <pre> {JSON.stringify(contacts)}</pre>
      <pre>{JSON.stringify(query.text)} </pre>
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3">
                  {" "}
                  Contact Manager
                  <Link to={"/contacts/add"} className="btn btn-primary ms-2">
                    New <i className="fa fa-plus-circle"></i>
                  </Link>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row">
                  <div className="col">
                    <div className="mb-2">
                      <input
                        name="text"
                        value={query.name}
                        onChange={searchContacts}
                        type="text"
                        className="form-control"
                        placeholder="Search Names"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-outline-dark"
                        value="Search"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <section className="contact-list">
            <div className="container">
              <div className="row">
                {filterContacts.length > 0 &&
                  filterContacts.map((contact) => {
                    return (
                      <React.Fragment key={contact.id}>
                        <div className="col-md-6" key={contact.id}>
                          <div className="card my-2">
                            <div className="card-body" >
                              <div className="row align-items-center d-flex justify-content-around">
                                <div className="col-md-4">
                                  <img
                                    className="contact-img"
                                    // src="data:image/png;base64,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"
                                    src={contact.photo}
                                    alt="user"
                                  />
                                </div>
                                <div className="col-md-7" >
                                  <ul className="list-group">
                                    <li className="list-group-item list-group-item-action">
                                      {" "}
                                      Name:{" "}
                                      <span className="fw-bold">
                                        {contact.name}
                                      </span>
                                      {/* <span className="fw-bold">Remo</span> */}
                                    </li>
                                    <li className="list-group-item list-group-item-action">
                                      {" "}
                                      Mob:{" "}
                                      <span className="fw-bold">
                                        {contact.mobile}
                                      </span>
                                    </li>
                                    <li className="list-group-item list-group-item-action">
                                      {" "}
                                      Email:{" "}
                                      {/* <span className="fw-bold">
                                        abc@gmail.com
                                      </span> */}
                                      <span className="fw-bold">
                                        {contact.email}
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-1 d-flex flex-column align-items-center">
                                  <Link
                                    // to={`/contacts/view/:contactId`}
                                    to={`/contacts/view/${contact.id}`}
                                    className="btn btn-warning my-1"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </Link>
                                  <Link
                                    to={`/contacts/edit/${contact.id}`}
                                    className="btn btn-primary my-1"
                                  >
                                    <i className="fa fa-pen"></i>
                                  </Link>
                                  <button
                                    className="btn btn-danger"
                                    onClick={() => clickDelete(contact.id)}
                                  >
                                    <i className="fa fa-trash"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
    </>
  );
};

export default ContactList;
