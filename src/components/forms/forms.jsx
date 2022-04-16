import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './forms.css'

import { useDispatch, useSelector } from 'react-redux'
import { useReducer } from 'react'
import { login } from '../redux/actions/formSaver'
const initialState = {
  username: '',
  password: '',
}
function monitorReducer(states, { field, value }) {
  return {
    ...states,
    [field]: value,
  }
}

const ReduxForm = () => {
  const dispatchs = useDispatch()
  const formSelectors = useSelector((state) => state.loginFormReducer)
  const [states, dispatch] = useReducer(monitorReducer, initialState)

  const onchange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value })

    // output state using useSelector hook
  }
  const { username, password } = states
  return (
    <div>
      <div className="containers-form  ">
        {/* login state */}
        <p className="text-center text-black">
          Welcome, {formSelectors.username}!
        </p>

        {/* end login state */}

        <Form
          className="mt-5   "
          onSubmit={(event) => {
            // console.log(username, password)
            event.preventDefault()
            // send username and password to store using dispatch

            dispatchs(login(username, password))
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={username}
              onChange={onchange}
              required
              placeholder="Enter Username"
            />
            <Form.Text className="text-muted">
              We'll never share your details with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
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
