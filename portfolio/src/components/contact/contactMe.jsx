import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap';

class Contact extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <Button variant="secondary" onClick={this.handleShow}>
          Reach Out To Jared!
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Jared!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Please Kindly drop your email, and I will be sure to promptly respond:
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  I promise I won't spam you, but I will reach out!
                </Form.Text>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Escape
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

// render(<Contact />);

export default Contact; 