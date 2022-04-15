import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from '../counter/count'
import Homepage from '../homepage/home'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import './navbar.css'

import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap'
import logo from '../images/logo.png'
import ReduxForm from '../forms/forms'

const NavbarsFunc = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar bg="dark" variant="dark" expand={false}>
          <Container fluid>
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Redux"
              />
              React-Redux
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton className="text-white">
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Choose A Project
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className=" links justify-content-center  text-center  flex-grow-1 pe-3">
                  {' '}
                  <Link to="/"> Home</Link>
                  <Link to="/login">Login</Link>
                  <Link to="/counter">Counter</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="counter" element={<Counter />} />
          <Route path="login" element={<ReduxForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default NavbarsFunc
