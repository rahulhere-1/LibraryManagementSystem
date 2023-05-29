import React from "react";
import { Container } from "react-bootstrap";
const About = () => {
  return (
    <div>
      <Container>
        <h1>About Library Management System</h1>
        <p className="mt-5">
          This is a simple application built for learning purpose. This keeps
          track of books in library.
        </p>
        <p>A Librarian can register Members and issue books.</p>
      </Container>
    </div>
  );
};

export default About;
