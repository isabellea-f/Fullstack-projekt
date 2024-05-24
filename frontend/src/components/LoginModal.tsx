import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./LoginModal.css";

function LoginModal() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("login function called");
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      console.log("logged in");
    } else {
      console.log("login failed");
    }

    handleClose();
  };

  return (
    <>
      <Button variant="link" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              className="login-button"
              variant="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Log In
            </Button>
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
