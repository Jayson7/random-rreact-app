import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './forms.css'
function ReduxForm() {
  return (
    <div>
      <div className="containers-form  ">
        <Form className="mt-5   ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" required placeholder="Enter Username" />
            <Form.Text className="text-muted">
              We'll never share your details with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required placeholder="Password" />
          </Form.Group>
          <Form.Text className="text-muted">
            We'll never share your details with anyone else.
          </Form.Text>
          <Button className="col-12 py-3 my-5" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default ReduxForm
