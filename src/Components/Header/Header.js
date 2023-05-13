import React from 'react';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
import './Header.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
    return (
        <header>
            <div >
                <Navbar className='container d-flex justify-content-between align-items-center py-4' bg="" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <div className='d-flex align-items-center'>
                                <img className='header-logo nav-logo' src={logo} alt="" />
                                <h1 className='text-success fw-bold ps-3'>Brain Booster!!!</h1>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll>
                            </Nav>
                            <Form className="d-flex">
                                <Link className='btn btn-outline-success mx-3 fw-semibold' to='/' variant="outline-success">Category</Link>
                                <Link className='btn btn-outline-success me-3 fw-semibold' to='/statistic' variant="outline-success">Statistic</Link>
                                <Link className='btn btn-outline-success fw-semibold' to='/blogs' variant="outline-success">Blogs</Link>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            {/* Previous code *====================================================/}
            {/* <nav className='container d-flex justify-content-between align-items-center py-4'>
                <div className='d-flex align-items-center'>
                    <img className='header-logo nav-logo' src={logo} alt="" />
                    <h1 className='text-success fw-bold ps-3'>Brain Booster!!!</h1>
                </div>
                <div>
                    <Link className='btn btn-outline-success mx-3 fw-semibold' to='/' variant="outline-success">Category</Link>
                    <Link className='btn btn-outline-success me-3 fw-semibold' to='/statistic' variant="outline-success">Statistic</Link>
                    <Link className='btn btn-outline-success fw-semibold' to='/blogs' variant="outline-success">Blogs</Link>
                </div>

            </nav> */}
        </header>
    );
};

export default Header;