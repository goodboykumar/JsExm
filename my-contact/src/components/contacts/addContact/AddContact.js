import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContactService } from "../../services/ContactService";

const AddContact = () => {
  let navigate = useNavigate();
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

  useEffect(() => {
    const asyncFn = async () => {
      try {
        //here setting the state loading as true
        setState({
          ...state,
          loading: true
        });
        let response = await ContactService.getGroups();

        setState({
          ...state,
          loading: false,
          groups: response.data
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
  },[]);

  const Submitform = async (event) => {
    event.preventDefault();
    try {
      let response = await ContactService.createContact(state.contact);
      if (response) {
        navigate("/contacts/list", { replace: true }); //it is react v6 router here we use navigate for more visit api ref
      }
    } catch (error) {
      setState({
        ...state,
        errorMessage: error.message
      });
      navigate("/contacts/add", { replace: false }); //it is react v6 router here we use navigate for more visit api ref
    }
  };
  //destructuring the state data
  let { loading, contact, groups, errorMessage } = state;

  return (
    <>
      <pre>{JSON.stringify(state.contact)} </pre>
      <section className="add-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-success fw-bold">Create Contact</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <form onSubmit={Submitform}>
                <div className="mb-2">
                  <input
                    required={true}
                    name="name"
                    onChange={updateInput}
                    value={contact.name} //here binding
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
                    className="btn btn-success"
                    value="Create"
                  />
                  <Link to={"/contacts/list"} className="btn btn-dark ms-2">
                    Close
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddContact;
