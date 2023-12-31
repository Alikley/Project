import { useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {Button, Container,Form,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import { useSelector } from "react-redux";
import './Header.scss'
import { FiHeart,FiUser,FiLogOut,FiShoppingCart } from "react-icons/fi";
import { LoginContext } from '../../../context/LoginContext';


function Header() {
  const userLog = useContext(LoginContext)
const state = useSelector((state:any)=> state.reduce)
  
  return (
    <div className='navbar-style'>

 <Navbar sticky='top' expand="lg" className="bg-bg-white shadow-sm mb-3" >
      <Container fluid>
        <Navbar.Brand to="/" as={NavLink} >Mohammad</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to="/shop" as={NavLink}>Shop</Nav.Link>

            <NavDropdown title="Pages" id="navbarScrollingDropdown">
              <NavDropdown.Item to="/" as={NavLink} style={{textDecoration:"none",background:"#fff",color:"#000"}}>Home</NavDropdown.Item>
                <NavDropdown.Divider />
                  <NavDropdown.Item to="/productDetails" as={NavLink} style={{textDecoration:"none",background:"#fff",color:"#000"}}>
                    Product Details
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="/checkout" as={NavLink} style={{textDecoration:"none",background:"#fff",color:"#000"}}>
                    Checkout
                </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">
              Blog
            </Nav.Link>
          </Nav> 

            <div className='form'>
              <Form className="d-flex form" >
                <Form.Control 
                  type="search"
                  placeholder="Search"
                  className="me-2 "
                  aria-label="Search"
                />
              </Form>
            </div>
          <NavLink to="/">
            <FiHeart style={{color:"#000",transform:"translateX(-65px)",fontSize:"1.5rem"}} />
          </NavLink>

          {
              userLog.isLogin?
              <NavLink to="/panel" style={{color:"#000",transform:"translateX(-30px)",fontSize:"1.5rem"}}>
                  <NavDropdown title={<FiLogOut  />} id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3"><button onClick={userLog.logout}>logOUT</button></NavDropdown.Item>
                      <NavDropdown.Divider />
                        <NavDropdown.Item href="#action4">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                  </NavDropdown>
              </NavLink>
              :
              <NavLink to="/login" style={{color:"#000",transform:"translateX(-30px)",fontSize:"1.5rem"}}><FiUser /></NavLink>
            }
          
             <Button  style={{width:"3rem" , height:"3rem",position:"relative"}} variant='dark' className='rounded-circle '>
              <NavLink to="/cart">
                <FiShoppingCart color='#Fff' fontSize="20px" />
              </NavLink>
                <div className="rounded-circle bg-white justify-content-center 
                  d-flex align-items-center" style={{color:"#000", width:"1.5rem",height:"1.5rem",
                  position:"absolute",bottom:0,right:0,transform:"translate(25%,25%)"}}>
                    ({state.length})
                </div>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header