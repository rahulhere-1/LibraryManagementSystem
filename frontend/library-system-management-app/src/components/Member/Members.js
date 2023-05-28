import { React, useState, Fragment, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import data from "./mock-data.json";
import AddMember from "./AddMembers";
import axios from "axios";
const BorrowedTable = () => {
  const [contacts, setContacts] = useState(data);

  useEffect(() => {
    axios
      .get("http://localhost:8080/members")
      .then((res) => setContacts(res.data));
  }, []);

  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
    phone: "",
    address: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editFormData.id,
      name: editFormData.name,
      phone: editFormData.phone,
      address: editFormData.address,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      id: contact.id,
      name: contact.name,
      phone: contact.phone,
      address: contact.address,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };
  return (
    <div>
      <Container className="mt-3">
        <AddMember />
        <h2 className="mb-3 mt-5  "> List of Registered Members</h2>
        <form onSubmit={handleEditFormSubmit}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                  {editContactId === contact.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </Table>
        </form>
      </Container>
    </div>
  );
};

export default BorrowedTable;
