import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ContactService } from "../../services/ContactService";
import "../../../App.css";
import Spinner from "../../spinner/Spinner";

const ViewContact = () => {
  let { contactId } = useParams();

  const [state, setState] = useState({
    loading: false,
    contact: {},
    errorMessage: "",
    group: {} //providing group object to read the groupId data
  });

  useEffect(() => {
    const asyncFn = async () => {
      try {
        //here setting the state loading as true
        setState({
          ...state,
          loading: true
        });
        let response = await ContactService.getContact(contactId);
        //response.data is the contact obj so getting the group from response.data
        let groupResponse = await ContactService.getGroup(response.data); //calling group api
        console.log(response.data);
        //here setting the data by contact id
        setState({
          ...state,
          loading: false,
          contacts: response.data,
          group: groupResponse.data //assigning the group data to obj
        });
      } catch (error) {
        setState({
          ...state,
          loading: false,
          errorMessage: `oops something wrong!`
        });
      }
      asyncFn();
    };
  }, [contactId]);

  let { loading, contact, errorMessage, group } = state; //passing the group also and will check cond

  return (
    <>
      {/* <p>{contactId} </p> */}
      <section className="view-contact-intro p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-warning">View Contact</p>
            </div>
          </div>
        </div>
      </section>

      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {/* //checking an object is empty or not here also the group obj check */}
          {Object.keys(contact).length > 0 && Object.keys(group).length > 0 && (
            <section className="view-contact mt-3">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <img
                      src={contact.photo}
                      //src="https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png"
                      alt="img"
                      className="contact-img"
                    />
                  </div>
                  <div className="col-md-8">
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-action">
                        {" "}
                        {/* Name: <span className="fw-bold">Remo</span> */}
                        Name: <span className="fw-bold">{contact.name}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        {" "}
                        Mob: <span className="fw-bold">{contact.mobile}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        {" "}
                        Email: <span className="fw-bold">{contact.email}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        {" "}
                        Company:{" "}
                        <span className="fw-bold">{contact.company}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        {" "}
                        Title: <span className="fw-bold">{contact.title}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        {" "}
                        Group: <span className="fw-bold">{group.name}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <Link to={"/contacts/list"} className="btn btn-warning">
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}
        </React.Fragment>
      )}
    </>
  );
};

export default ViewContact;
