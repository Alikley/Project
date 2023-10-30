// import { Col, Container, Nav, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Footer.scss'
// import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-4" style={{background:"#000"}}>
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase" style={{color:'#fff',textDecoration:"none"}}>Footer Content</h5>
                <p style={{color:'#fff',textDecoration:"none"}}>Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase" style={{color:'#fff',textDecoration:"none"}}>Links</h5>
                <ul className="list-unstyled" >
                    <li ><NavLink style={{color:'#fff',textDecoration:"none"}} to="#" >Link 1</NavLink></li>
                    <li><NavLink style={{color:'#fff',textDecoration:"none"}} to="#">Link 1</NavLink></li>
                    <li><NavLink style={{color:'#fff',textDecoration:"none"}} to="#">Link 1</NavLink></li>
                    <li><NavLink style={{color:'#fff',textDecoration:"none"}} to="#">Link 1</NavLink></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase" style={{color:'#fff',textDecoration:"none"}}>Links</h5>
                <ul className="list-unstyled">
                    <li><NavLink style={{color:'#fff',textDecoration:"none"}} to="#">Link 1</NavLink></li>
                    <li><NavLink style={{color:'#fff',textDecoration:"none"}} to="#">Link 1</NavLink></li>
                    <li><NavLink style={{color:'#fff',textDecoration:"none"}} to="#">Link 1</NavLink></li>
                    <li><NavLink style={{color:'#fff',textDecoration:"none"}} to="#">Link 1</NavLink></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3" style={{color:'#fff',textDecoration:"none"}}>© 2020 Copyright:
        <a href="https://mdbootstrap.com/" style={{color:'red ',textDecoration:"none"}}> Mohammad</a>
    </div>

</footer>
  )
}

export default Footer