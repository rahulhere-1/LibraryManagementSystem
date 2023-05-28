import { React, useState } from "react";
import { Container, Button, Collapse, Form, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import axios from "axios";
const AddBooks = () => {
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      isbn: "",
      title: "",
      author: "",
    },
    onSubmit: (values) => {
      axios
        .post("http://localhost:8080/library", values)
        .then(function (response) {
          alert("submitted successfully");
        })
        .catch(function (error) {
          alert(error);
        });
    },
  });

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
            Add Books +
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <Form className="p-3" onSubmit={formik.handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="isbn">
                    <Form.Label>Book ID</Form.Label>
                    <Form.Control
                      type="text"
                      name="isbn"
                      placeholder="Enter Book ID"
                      onChange={formik.handleChange}
                      value={formik.values.isbn}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                      type="text"
                      name="author"
                      onChange={formik.handleChange}
                      value={formik.values.author}
                      placeholder="Enter Author Here"
                    />
                  </Form.Group>
                </Row>

                <Form.Group as={Col} controlId="title">
                  <Form.Label>Book Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Boot Title Here"
                    name="title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Button
                  className="m-2"
                  onClick={formik.handleReset}
                  variant="dark"
                  type="reset"
                >
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

export default AddBooks;
