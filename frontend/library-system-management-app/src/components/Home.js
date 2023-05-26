import { React } from "react";
import { Container } from "react-bootstrap";
import AddBorrower from "./Borrowed/AddBorrower";
import BorrowedTable from "./Borrowed/BorrowedTable";
const Home = () => {
  return (
    <div>
      <Container className="bg-light ">
        <AddBorrower />
        <BorrowedTable />
      </Container>
    </div>
  );
};

export default Home;
