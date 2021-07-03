import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import style from '../../styles/NavBar.module.css';
import Link from 'next/link';

const NavBar = () => {
    return (
        <Navbar expand="lg" fixed="top" bg="none" className="py-4"
            style={{ fontFamily: '"Roboto Slab", serif' }}>
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