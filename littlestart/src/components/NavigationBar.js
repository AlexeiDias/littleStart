import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Styles = styled.div`
.navbar {
    background-color: whitesmoke

}
.insta {
            font-size:25px;
            padding-top: .3125rem;
            padding-right:10px;
            margin-bottom:0px;
            padding-bottom:0px;
        }
        .email {
            margin-top:6px;
            padding-right:10px;

        font-size: 1.20rem;
        padding-top: .3125rem;    }

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
                       <a className="insta" href="https://www.instagram.com/lilstartdaycare/" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram',]} /></a>
                       <p className="email"><a href="mailto:littlestart@gmail.com">littlestart@gmail.com</a></p>
                       <p className="email"><a href="tel:1-415-705-9104">415-7059104</a></p>

                           {/* <Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item> */}
                           {/* <Nav.Item><Nav.Link href='/about'>About</Nav.Link></Nav.Item> */}
                           {/* <Nav.Item><Nav.Link href='/specialEv'>Special Events</Nav.Link></Nav.Item> */}
                           {/* <Nav.Item><Nav.Link href='/calendar'>Calendar</Nav.Link></Nav.Item> */}
                           {/* <Nav.Item><Nav.Link href='/rules'>Rules</Nav.Link></Nav.Item> */}
                           {/* <Nav.Item><Nav.Link href='/parentArea'>Login</Nav.Link></Nav.Item> */}
                       </Nav>
                   </Navbar.Collapse>
                </Navbar>
            </Styles>
        )
    }
}
