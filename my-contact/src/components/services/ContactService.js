import axios from "axios";

export class ContactService {
  static serverUrl = `http://localhost:9000`;

  //calling api
  static getAllContacts() {
    let dataUrl = `${this.serverUrl}/contacts`;
    //now return the api call
    return axios.get(dataUrl);
  }

  //here getting the id by clicking
  static getContact(contactId) {
    let dataUrl = `${this.serverUrl}/contacts/${contactId}`;
    return axios.get(dataUrl);
  }

  //getting group will loop all data and based on groups will show all the data
  static getGroups() {
    let dataUrl = `${this.serverUrl}/groups`;
    return axios.get(dataUrl);
  }
  //getting single group data
  static getGroup(contact) {
    //here providing contact full object from there reading the id
    let groupId = contact.groupId;
    let dataUrl = `${this.serverUrl}/groups/${groupId}`;
    return axios.get(dataUrl);
  }

  //for create contact we must send contact as obj
  static createContact(contact) {
    let dataUrl = `${this.serverUrl}/contacts`;
    return axios.post(dataUrl, contact);
  }

  // update api call we're  contact object with id to put req
  static updateContact(contact, contactId) {
    let dataUrl = `${this.serverUrl}/contacts/${contactId}`;
    return axios.put(dataUrl, contact);
  }

  static deleteContact(contactId) {
    let dataUrl = `${this.serverUrl}/contacts/${contactId}`;
    return axios.delete(dataUrl);
  }
}
