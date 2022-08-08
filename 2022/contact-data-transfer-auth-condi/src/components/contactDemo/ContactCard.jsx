import React from "react";

const ContactCard = (props) => {
  return (
    <>
      ContactCard
      {/* getting an object now will provide cond and render */}
      <pre>{JSON.stringify(props.selectedContact)} </pre>
      {Object.keys(props.selectedContact).length > 0 && (
        <div>
          <div className="card shadow-lg sticky-top">
            <img
              src={props.selectedContact.photo}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">{props.selectedContact.name} </li>
            </ul>
            <ul className="list-group">
              <li className="list-group-item">
                {props.selectedContact.email}{" "}
              </li>
            </ul>
            <ul className="list-group">
              <li className="list-group-item">
                {props.selectedContact.title}{" "}
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactCard;
