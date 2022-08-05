import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AddContact from "./components/contacts/addContact/AddContact";
import ContactList from "./components/contacts/contactList/ContactList";
import EditContact from "./components/contacts/editContact/EditContact";
import ViewContact from "./components/contacts/viewContact/ViewContact";
import Navbar from "./components/navBar/Navbar";
import Spinner from "./components/spinner/Spinner";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Navigate to={"/contacts/list"} />} />
        <Route path={"/contacts/list"} element={<ContactList />} />
        <Route path={"/contacts/add"} element={<AddContact />} />
        <Route path={"/contacts/view/:contactId"} element={<ViewContact />} />
        <Route path={"/contacts/edit/:contactId"} element={<EditContact />} />
      </Routes>
    </>
  );
}

export default App;
