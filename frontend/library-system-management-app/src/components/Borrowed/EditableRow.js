import React from "react";
import { Button } from "react-bootstrap";
const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="isbn"
          value={editFormData.isbn}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="title"
          value={editFormData.title}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="memberId"
          value={editFormData.memberId}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="memberName"
          value={editFormData.memberName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="date"
          required="required"
          placeholder="dd-mm-yyyy"
          name="issueDate"
          value={editFormData.issueDate}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="date"
          required="required"
          placeholder="dd-mm-yyyy"
          name="dueDate"
          value={editFormData.dueDate}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <Button type="submit" variant="success">
          Save
        </Button>
        <Button
          className="m-1"
          type="button"
          variant="secondary"
          onClick={handleCancelClick}
        >
          Cancel
        </Button>
      </td>
    </tr>
  );
};

export default EditableRow;
