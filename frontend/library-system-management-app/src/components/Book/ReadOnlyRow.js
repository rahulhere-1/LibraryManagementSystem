import React from "react";
import { Button } from "react-bootstrap";
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.isbn}</td>
      <td>{contact.title}</td>
      <td>{contact.author}</td>

      <td>
        <Button
          type="button"
          variant="primary"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </Button>
        <Button
          variant="danger"
          type="button"
          className="m-1"
          onClick={() => handleDeleteClick(contact.isbn)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
