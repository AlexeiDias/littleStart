import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
    background-color: whitesmoke

}

.navbar-brand .navbar-nav .navbar-link  {
    color: whitesmoke;

    &:hover{
        color: white;
    }
}
`;

export default class NavigationBar extends Component {
    render() {
        return (
            <Styles>
                <Navbar expand='lg'>
                   <Navbar.Brand href='/'>Little Start Day Care</Navbar.Brand> 
                   <Navbar.Toggle aria-controls='basic-navbar-nav' />
                   <Navbar.Collapse id='basic-navbar-nav'>
                       <Nav className='ml-auto'>
                           {/* <Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item> */}
                           <Nav.Item><Nav.Link href='/about'>About</Nav.Link></Nav.Item>
                           {/* <Nav.Item><Nav.Link href='/specialEv'>Special Events</Nav.Link></Nav.Item> */}
                           {/* <Nav.Item><Nav.Link href='/calendar'>Calendar</Nav.Link></Nav.Item> */}
                           <Nav.Item><Nav.Link href='/rules'>Rules</Nav.Link></Nav.Item>
                           {/* <Nav.Item><Nav.Link href='/parentArea'>Login</Nav.Link></Nav.Item> */}
                       </Nav>
                   </Navbar.Collapse>
                </Navbar>
            </Styles>
        )
    }
}
