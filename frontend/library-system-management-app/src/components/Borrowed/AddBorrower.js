import { React, useState } from "react";
import { Container, Button, Collapse, Form, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import axios from "axios";
const AddBorrower = () => {
  const [open, setOpen] = useState(false);
  const formik = useFormik({
    initialValues: {
      isbn: "",
      id: "",
      issueDate: "",
      dueDate: "",
    },
    onSubmit: (values) => {
      const data = {};
      axios
        .get("http://localhost:8080/library/" + values.isbn)
        .then((res) => {
          data.book = res.data;
          axios
            .get("http://localhost:8080/members/" + values.id)
            .then((res) => {
              data.member = res.data;
              data.issueDate = values.issueDate;
              data.dueDate = values.dueDate;
              data.id = Math.floor(Math.random() * 90000000) + 10000000;
              //console.log("this is line 30", data);
              axios
                .post("http://localhost:8080/borrowed", data)
                .then(function (response) {
                  alert("submitted successfully");
                  window.location.reload(true);
                })
                .catch(function (error) {
                  alert("couldnt submit data");
                  console.log(error);
                });
            })
            .catch((err) => alert("No member found with given member ID"));
        })
        .catch((err) => alert("No Book found with given ISBN"));
    },
  });

  return (
    <div>
      <Container className="mt-3 border border-dark">
        <div>
          <Button
            variant="dark mt-3 mb-3"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Issue Book +
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <Form className="p-3" onSubmit={formik.handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Book ID</Form.Label>
                    <Form.Control
                      type="text"
                      name="isbn"
                      required
                      placeholder="Enter Book ID"
                      onChange={formik.handleChange}
                      value={formik.values.isbn}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Member ID</Form.Label>
                    <Form.Control
                      type="text"
                      name="id"
                      required
                      placeholder="Enter Member ID"
                      onChange={formik.handleChange}
                      value={formik.values.id}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Issue Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="issueDate"
                      placeholder="Select Date"
                      onChange={formik.handleChange}
                      value={formik.values.issueDate}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Return Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="dueDate"
                      placeholder="Enter Member ID"
                      onChange={formik.handleChange}
                      value={formik.values.dueDate}
                    />
                  </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Button
                  className="m-2"
                  variant="dark"
                  type="reset"
                  onClick={formik.handleReset}
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

export default AddBorrower;
