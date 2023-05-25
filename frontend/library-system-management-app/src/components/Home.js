import { React } from "react";
import { Container } from "react-bootstrap";
import AddBook from "./AddBook";
import BorrowedTable from "./BorrowedTable";
const Home = () => {
  return (
    <div>
      <Container className="bg-light ">
        <AddBook />
        <BorrowedTable />
      </Container>
    </div>
  );
};

export default Home;
