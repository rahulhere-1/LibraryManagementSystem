import { React, useState, useEffect, Fragment } from "react";
import { Container, Table } from "react-bootstrap";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import AddBooks from "./AddBooks";
import axios from "axios";

const BooksList = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/library")
      .then((res) => setContacts(res.data));
  }, []);

  const [editFormData, setEditFormData] = useState({
    isbn: "",
    title: "",
    author: "",
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
      isbn: editFormData.isbn,
      title: editFormData.title,
      author: editFormData.author,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex(
      (contact) => contact.isbn === editContactId
    );

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.isbn);

    const formValues = {
      isbn: contact.isbn,
      title: contact.title,
      author: contact.author,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.isbn === contactId);
    axios
      .delete("http://localhost:8080/borrowed/isbn/" + contactId)
      .then((res) => {
        axios
          .delete("http://localhost:8080/library/" + contactId)
          .then((res) => {
            alert("Deleted Successfully");
          })
          .catch((err) => alert("something went wrong"));
      })
      .catch((error) => alert("something went wrong"));
    newContacts.splice(index, 1);

    setContacts(newContacts);
  };
  return (
    <div>
      <Container className="mt-3">
        <AddBooks />
        <h2 className="mb-3 mt-5  "> ALL Library Books</h2>
        <form onSubmit={handleEditFormSubmit}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#ISBN</th>
                <th>Title</th>
                <th>Author</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                  {editContactId === contact.isbn ? (
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

export default BooksList;
