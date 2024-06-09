import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./LoginModal.css";

/* Login form */

function LoginModal() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShowFailureMessage(false);
  };
  const handleShow = () => setShow(true);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("login function called");

    const requestBody = JSON.stringify({ email, password });
    console.log("request body:", requestBody);

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      });

      console.log("response status:", response.status);

      if (response.ok) {
        console.log("Login succesful");
        handleClose();
      } else {
        setShowFailureMessage(true);
        const responseBody = await response.json();
        console.log("The login was unsuccessful", responseBody);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <Button variant="link" onClick={handleShow}>
        LOGIN
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          {showFailureMessage && (
            <p>Wrong e-mail or password. Please try again.</p>
          )}
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
            <div className="login-close-container">
              <Button
                className="login-button"
                variant="primary"
                type="submit"
                onClick={handleSubmit}
              >
                Log In
              </Button>
              <Button
                className="close-button"
                variant="primary"
                onClick={handleClose}
              >
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal;
