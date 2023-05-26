import { React, useState } from "react";
import { Container, Button, Collapse, Form, Row, Col } from "react-bootstrap";
const AddMembers = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Container className="mt-3 border border-primary">
        <div>
          <Button
            variant="primary mt-3 mb-3"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Add Member +
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <Form className="p-3">
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Member Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Book ID" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Author Here" />
                  </Form.Group>
                </Row>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Member Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Boot Title Here"
                  />
                </Form.Group>

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

export default AddMembers;
