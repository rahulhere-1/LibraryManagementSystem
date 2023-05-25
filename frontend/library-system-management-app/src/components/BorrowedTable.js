import { React, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
const BorrowedTable = () => {
  const [books, setbooks] = useState([
    {
      id: 1,
      bookId: "BLAKSDJFL29385",
      title: "the forgot time",
      author: "yaung",
      memberId: 5,
      memberName: "jan",
      issueDate: "21/4/23",
      dueDate: "23/4/23",
    },
    {
      id: 1,
      bookId: "LKJLKAJFL29385",
      title: "this is that",
      author: "yaung",
      memberId: 5,
      memberName: "jan",
      issueDate: "21/4/23",
      dueDate: "23/4/23",
    },
    {
      id: 1,
      bookId: "ZKKSJLDFFL29385",
      title: "what the hell",
      author: "yaung",
      memberId: 5,
      memberName: "jan",
      issueDate: "21/4/23",
      dueDate: "23/4/23",
    },
  ]);

  return (
    <div>
      <Container className="mt-3">
        <h2 className="mb-3 mt-5  "> List of Issued Books</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Book ID</th>
              <th>Book Title</th>
              <th>Member ID</th>
              <th>Member Name</th>
              <th>Issue Date</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.bookId}</td>
                <td>{book.title}</td>
                <td>{book.memberId}</td>
                <td>{book.memberName}</td>
                <td>{book.issueDate}</td>
                <td>{book.dueDate}</td>
                <td>
                  <Button variant="danger">Delete</Button>
                </td>
                <td>
                  <Button variant="primary">Update</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default BorrowedTable;
