import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import style from '../../styles/NavBar.module.css';
import Link from 'next/link';
import { useEffect, useState } from "react";

const NavBar = () => {
    const [navBarColor, setNavBarColor] = useState(false);

    const changeNavBar = () => {
        if (window.scrollY > 95) {
            return setNavBarColor(true)
        }
        setNavBarColor(false)
    }

    useEffect(() => {
        if (typeof window !== undefined) {
            return window.addEventListener('scroll', changeNavBar)
        }
    }, [])


    return (
        <Navbar expand="lg" fixed="top"
            className={navBarColor ? `${style.navBar}` : 'py-4'}
            style={{ fontFamily: '"Roboto Slab", serif', transition: '.8s ease' }}>
            <Container>
                <Link href="/">
                    <a style={{ textDecoration: 'none', color: '#fff' }}><h5>Mitnog-IT</h5></a>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={`ms-auto ${style.navItems}`}>
                        <Link href="/">
                            <a><b>Home</b></a>
                        </Link>
                        <Link href="/">
                            <a><b>About</b></a>
                        </Link>
                        <Link href="#services">
                            <a><b>Services</b></a>
                        </Link>
                        <Link href="/">
                            <a><b>Contact</b></a>
                        </Link>
                        <Link href="/">
                            <a><b>Review</b></a>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;