import { Container, Nav, Navbar } from "react-bootstrap";
import style from '../../styles/NavBar.module.css';
import Link from 'next/link';
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from '../../public/Mitnog.png';

const NavBar = () => {
    const [windowSize, setWindowSize] = useState(0);

    useEffect(() => {
        if (typeof window !== undefined) {
            return window.addEventListener('resize', handleSize)
        }
    }, [])

    const handleSize = () => {
        setWindowSize(window.innerWidth)
    }

    return (
        <Navbar expand="lg"
            className={windowSize <= 500 ? `${style.mobileNav}` : `'py-3' ${style.navbar}`}>
            <Container>
                <Link href="/">
                    <a>
                        {windowSize > 500 && <Image src={logo} alt="mitnog it" width={150} height={40} />}
                        {windowSize <= 500 && <Image src={logo} alt="mitnog it" width={120} height={35} />}
                    </a>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={`ms-auto ${style.navItems}`}>
                        <Link href="/">
                            <a><b>Home</b></a>
                        </Link>
                        <Link href="#services">
                            <a><b>Services</b></a>
                        </Link>
                        <Link href="#capacity">
                            <a><b>About</b></a>
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
        </Navbar >
    );
};

export default NavBar;