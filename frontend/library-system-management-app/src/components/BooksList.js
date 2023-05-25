import React from "react";
import { Container, Table } from "react-bootstrap";
const BooksList = () => {
  return (
    <div>
      <Container className="mt-5">
        <h2>ALL Library Books</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Book ID</th>
              <th>Book Title</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default BooksList;
