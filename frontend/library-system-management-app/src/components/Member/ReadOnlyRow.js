import React from "react";
import { Button } from "react-bootstrap";
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
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
          onClick={() => handleDeleteClick(contact.id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
