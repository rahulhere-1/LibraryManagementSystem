import { React, useState, Fragment, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import axios from "axios";
const BorrowedTable = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/borrowed").then((res) => {
      const json = [];

      for (var i = 0; i < res.data.length; i++) {
        var obj = {};
        obj.id = res.data[i].id;
        obj.isbn = res.data[i].book.isbn;
        obj.title = res.data[i].book.title;
        obj.memberId = res.data[i].member.id;
        obj.memberName = res.data[i].member.name;
        obj.issueDate = res.data[i].issueDate;
        obj.dueDate = res.data[i].dueDate;
        json.push(obj);
      }
      setContacts(json);
    });
  }, []);

  const [editFormData, setEditFormData] = useState({
    isbn: "",
    title: "",
    memberId: "",
    memberName: "",
    issueDate: "",
    dueDate: "",
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
      id: editContactId,
      isbn: editFormData.isbn,
      title: editFormData.title,
      memberId: editFormData.memberId,
      memberName: editFormData.memberName,
      issueDate: editFormData.issueDate,
      dueDate: editFormData.dueDate,
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
      isbn: contact.isbn,
      title: contact.title,
      memberId: contact.memberId,
      memberName: contact.memberName,
      issueDate: contact.issueDate,
      dueDate: contact.dueDate,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
    axios
      .delete("http://localhost:8080/borrowed/" + contactId)
      .then((res) => alert("Deleted Successfully"))
      .catch((err) => {
        alert("Something went wrong");
        console.log(err);
      });
    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };
  return (
    <div>
      <Container className="mt-3">
        <h2 className="mb-3 mt-5  "> List of Issued Books</h2>
        <form onSubmit={handleEditFormSubmit}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#ISBN</th>
                <th>Title</th>
                <th>Member ID</th>
                <th>Member Name</th>
                <th>Issued Date</th>
                <th>Due Date</th>
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
