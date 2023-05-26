import { React, useState } from "react";
import { Container, Button, Collapse, Form, Row, Col } from "react-bootstrap";
const AddBorrower = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Container className="mt-3 border border-success">
        <div>
          <Button
            variant="success mt-3 mb-3"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Add Borrower +
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <Form className="p-3">
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Book ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter Book ID" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Member ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter Member ID" />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Issue Date</Form.Label>
                    <Form.Control type="date" placeholder="Select Date" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Return Date</Form.Label>
                    <Form.Control type="date" placeholder="Enter Member ID" />
                  </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Button className="m-2" variant="dark" type="reset">
                  Clear
                </Button>
              </Form>
            </div>
          </Collapse>
        </div>
      </Container>
    </div>
  );
};

export default AddBorrower;
