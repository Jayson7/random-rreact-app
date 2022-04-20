import { React, useState } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import './register.css'
import { useDispatch, useSelector } from 'react-redux'
import { useReducer } from 'react'
import { Link } from 'react-router-dom'
import { register } from '../redux/actions/registrationAction'
const initialState = {
  username: '',
  password: '',
  email: '',
  phone: '',
  full_name: '',
}
function monitorReducer(regdata, { field, value }) {
  return {
    ...regdata,
    [field]: value,
  }
}

const RegistrationForm = () => {
  const dispatchs = useDispatch()
  const formSelectors = useSelector((state) => state.RegFormReducer)
  const [regdata, dispatch] = useReducer(monitorReducer, initialState)
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  const onchange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value })

    // output state using useSelector hook
  }
  //  line 34 must be arranged in the format of the form below
  const { username, full_name, email, password, phone } = regdata
  return (
    <div>
      <div className="containers-form  ">
        <p className="text-center text-black mt-5">Create an Account with us</p>

        <Form
          className="mt-3   "
          onSubmit={(event) => {
            event.preventDefault()
            // send username and password to store using dispatch

            dispatchs(register(phone, full_name, email, username, password))
            // trigger modal
            handleShow()
          }}
        >
          <Form.Group className="mb-2" controlId="formBasicText">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={username}
              onChange={onchange}
              required
              placeholder="Enter Username"
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicText">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="full_name"
              value={full_name}
              onChange={onchange}
              required
              placeholder="Full name"
            />
          </Form.Group>
          <Form.Text className="text-muted">
            We'll never share your details with anyone else.
          </Form.Text>

          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={onchange}
              required
              placeholder="Your Email"
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={onchange}
              required
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              name="phone"
              value={phone}
              onChange={onchange}
              required
              placeholder="phone"
            />
          </Form.Group>
          <Form.Text className="text-muted">
            We'll never share your details with anyone else.
          </Form.Text>

          <Button className="col-12 py-3 my-2" variant="success" type="submit">
            Submit
          </Button>
        </Form>
        {/* modal popup to display regdata after submission */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* iterate formSelectors designed */}
            {Object.keys(formSelectors).map((key) => (
              <p key={key}>
                {key}: {formSelectors[key]}
              </p>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Re-edit
            </Button>
            <Button variant="primary" onClick={handleClose}>
              <Link className="text-white text-decoration-none" to="/login">
                Confirm
              </Link>
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default RegistrationForm
