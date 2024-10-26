import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

export default function Header(){

  const navigate = useNavigate()

  const goTo=()=>{
    navigate("/order")
  }

    return(
        <>
           <Navbar expand="lg" className="bg-warning">
      <Container>
        <Navbar.Brand ><h2 className='text-light'>India-CART</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Product</Nav.Link>
           <Button className="btn-primary" onClick={()=>goTo()}>Cart</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}