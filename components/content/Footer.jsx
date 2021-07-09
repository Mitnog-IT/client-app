import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import { FaFacebookSquare, FaLinkedin, FaMapMarkedAlt, FaRedditSquare, FaTwitterSquare } from 'react-icons/fa';
import style from '../../styles/Footer.module.css';
import logo from '../../public/logo1-removebg-preview.png';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={style.footer}>
            <div className="container">
                <Row className="pt-3">
                    <Col md={4}>
                        <Image src={logo} alt="mitnog it" width={200} height={66} />
                        <br />
                        <small>Mitnog-IT is an established IT company delivering IT services of any complexity to clients worldwide. Being in IT business for over some years now we has a strong team of skilled experienced IT experts.</small><br /><br />
                        <h3 className={style.social}>
                            <a href="https://www.facebook.com/mitnogit"
                            >  <FaFacebookSquare /></a>
                            <a href="https://www.facebook.com/mitnogit">   <FaLinkedin /></a>
                            <a href="https://www.facebook.com/mitnogit">  <FaTwitterSquare /></a>
                            <a href="https://www.facebook.com/mitnogit">  <FaRedditSquare /></a>
                        </h3>
                    </Col>
                    <Col md={2}>
                        <div style={{ minHeight: '66px' }}
                            className="d-flex align-items-center">
                            <h5>Our Services</h5>
                        </div>
                        <div className={style.block}>
                            <small>Web Design</small><br />
                            <small>Web Development</small><br />
                            <small>E-Commerce</small><br />
                            <small>Mobile Apps</small><br />
                            <small>Digital Marketing</small><br />
                            <small>SEO</small><br />
                            <small>Graphics Design</small><br />
                            <small>CMS</small>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div style={{ minHeight: '66px' }}
                            className="d-flex align-items-center">
                            <h5>About</h5>
                        </div>
                        <div className={style.block}>
                            <small>Blog</small><br />
                            <small>Team</small><br />
                            <small>Career</small><br />
                            <small>Help & Support</small><br />
                            <small>Terms & Conditions</small><br />
                            <small>Privacy Policy</small>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div style={{ minHeight: '66px' }}
                            className="d-flex align-items-center">
                            <h5><FaMapMarkedAlt /> Our Location</h5>
                        </div>
                        <small>Mitnog-IT Ltd. <br />
                            KhejurTolar Mor , Section# 2, Mirpur, Dhaka-1216, Bangladesh <br /> <br />

                            Phone : 0123456789 / 0123456789 <br />
                            Email : mitnogit@gmail.com</small>
                    </Col>
                </Row>

                <p className="copyright text-center pt-5">
                    {year} Mitnog-IT &copy; all rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;