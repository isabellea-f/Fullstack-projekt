import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./LoginModal.css";

function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="link" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button
              className="login-button"
              variant="primary"
              type="submit"
              onClick={handleClose}
            >
              Log In
            </Button>{" "}
            <Button
              className="login-button"
              variant="primary"
              onClick={handleClose}
            >
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal;
