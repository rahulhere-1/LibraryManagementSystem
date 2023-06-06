import { React, useState } from "react";
import { Container, Button, Collapse, Form, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import axios from "axios";
const AddMembers = () => {
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      id: Math.floor(Math.random() * 90000000) + 10000000,
      name: "",
      phone: "",
      address: "",
    },
    onSubmit: (values) => {
      axios
        .post("http://localhost:8080/members", values)
        .then(function (response) {
          console.log(response);
          console.log(values);
          alert("submitted successfully");
          window.location.reload(true);
        })
        .catch(function (error) {
          alert(error);
        });
    },
  });

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
              <Form className="p-3" onSubmit={formik.handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Member Name</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      name="name"
                      placeholder="Enter Book ID"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Author Here"
                      name="phone"
                      required
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                    />
                  </Form.Group>
                </Row>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Member Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    placeholder="Enter Boot Title Here"
                    onChange={formik.handleChange}
                    value={formik.values.address}
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
