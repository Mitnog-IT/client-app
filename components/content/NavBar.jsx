import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import style from '../../styles/NavBar.module.css';
import Link from 'next/link';
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from '../../public/logo1-removebg-preview.png';

const NavBar = () => {
    const [isScroll, setIsScroll] = useState(false);

    const changeNavBar = () => {
        if (window.scrollY > 95) {
            return setIsScroll(true)
        }
        setIsScroll(false)
    }

    useEffect(() => {
        if (typeof window !== undefined) {
            return window.addEventListener('scroll', changeNavBar)
        }
    }, [])


    return (
        <Navbar expand="lg" fixed="top"
            className={isScroll ? `${style.scrollNavBar}` : 'py-3'}
            style={{ transition: '0.8s ease', fontFamily: '"Roboto Slab", serif' }}>
            <Container>
                <Link href="/">
                    <a>
                        <Image src={logo} alt="mitnog it" width={200} height={66} />
                    </a>
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