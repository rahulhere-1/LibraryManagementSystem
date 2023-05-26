import React from "react";
import { Container, Table } from "react-bootstrap";
import AddMembers from "./AddMembers";
const Members = () => {
  return (
    <div>
      <Container>
        <Container className="mt-5">
          <AddMembers />
          <h2 className="mt-5">List of Registered Members</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Member ID</th>
                <th>Member Name</th>
                <th>Phone</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>9873546456</td>
                <td>address1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>2786456456</td>
                <td>address234</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>987456456</td>
                <td>address753</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Container>
    </div>
  );
};
export default Members;
