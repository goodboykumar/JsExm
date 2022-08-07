import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../../../App.css";
import { ContactService } from "../../services/ContactService";
import Spinner from "../../spinner/Spinner";

const EditContact = () => {
  let navigate = useNavigate();
  let { contactId } = useParams(); //useParam is used to get the data from current api
  const [state, setState] = useState({
    loading: false,
    contact: {
      name: "",
      photo: "",
      mobile: "",
      email: "",
      company: "",
      title: "",
      groupId: ""
    },
    groups: [],
    errorMessage: ""
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
        let groupResponse = await ContactService.getGroups(response.data); //calling group api
        console.log(response.data);
        //here setting the data by contact id
        setState({
          ...state,
          loading: false,
          contact: response.data,
          groups: groupResponse.data //assigning the group data to obj
        });
      } catch (error) {
        setState({
          ...state,
          loading: false,
          errorMessage: error.message
        });
      }
      
    };
    asyncFn();
  },[contactId]);

  //lets make binding means when the user type something show that also in pre tag
  let updateInput = (event) => {
    setState({
      ...state,
      contact: {
        // contact is having the state data
        ...state.contact,
        [event.target.name]: event.target.value
      }
    });
  };

 

  let submitForm = async (event) => {
    event.preventDefault();
    try {
      let response = await ContactService.updateContact(
        state.contact,
        contactId
      );
      if (response) {
        navigate("/contacts/list", { replace: true }); //it is react v6 router here we use navigate for more visit api ref
      }
    } catch (error) {
      setState({
        ...state,
        errorMessage: error.message
      });
      navigate(`/contacts/edit/${contactId}`, { replace: false }); //it is react v6 router here we use navigate for more visit api ref
    }
  };
   //destructuring the state data
   let { loading, contact, groups, errorMessage } = state;

  return (
    <>
      <pre>{JSON.stringify(contact)} </pre>

      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <section className="add-contact p-3">
            <div className="container">
              <div className="row">
                <div className="col">
                  <p className="h4 text-primary fw-bold">Edit Contact</p>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-4">
                  <form onSubmit={submitForm}>
                    <div className="mb-2">
                      <input
                        required={true}
                        name="name"
                        value={contact.name}
                        onChange={updateInput}
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>

                    <div className="mb-2">
                      <input
                        required={true}
                        name="photo"
                        onChange={updateInput}
                        value={contact.photo} //here binding
                        type="text"
                        className="form-control"
                        placeholder="Photo Url"
                      />
                    </div>

                    <div className="mb-2">
                      <input
                        required={true}
                        name="mobile"
                        onChange={updateInput}
                        value={contact.mobile} //here binding
                        type="number"
                        className="form-control"
                        placeholder="Mobile"
                      />
                      <div className="mb-2">
                        <input
                          required={true}
                          name="email"
                          onChange={updateInput}
                          value={contact.email} //here binding
                          type="text"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="mb-2">
                      <input
                        required={true}
                        name="company"
                        onChange={updateInput}
                        value={contact.company} //here binding
                        type="text"
                        className="form-control"
                        placeholder="Company"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        required={true}
                        name="title"
                        onChange={updateInput}
                        value={contact.title} //here binding
                        type="text"
                        className="form-control"
                        placeholder="Title"
                      />
                    </div>

                    <div className="mb-2">
                      <select
                        required={true}
                        name="groupId"
                        onChange={updateInput}
                        value={contact.groupId} //here binding
                        className="form-control"
                      >
                        <option value=""> Select a Group</option>
                        {groups.length > 0 &&
                          groups.map((group) => {
                            return (
                              <>
                                {/* we need to take value for getting the index no here */}
                                <option key={group.id} value={group.id}>
                                  {" "}
                                  {group.name}
                                </option>
                              </>
                            );
                          })}
                      </select>
                    </div>
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-primary"
                        value="Update"
                      />
                      <Link to={"/contacts/list"} className="btn btn-dark ms-2">
                        Close
                      </Link>
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  <img
                    src={contact.photo}
                    // src="https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png"
                    alt="img"
                    className="contact-img"
                  />
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
    </>
  );
};

export default EditContact;
