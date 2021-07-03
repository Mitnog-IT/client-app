import { Button, Card, Col, Row } from 'react-bootstrap';
import style from '../../styles/Service.module.css';
import marketing from '../../public/digital-marketing.png';
import develop from '../../public/programming.png';
import design from '../../public/graphic-design.png';
import Image from 'next/image';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const Service = () => {
    return (
        <section id="services"
            style={{ fontFamily: '"Roboto Slab", serif' }}>
            <div className={style.heading}>
                <h3>Our Services</h3>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            </div>
            <div className="container">
                <Row className={style.container}>
                    <Col md={4} className="d-flex justify-content-center mt-3">
                        <Card className={style.card}>
                            <div className={style.card_content}>
                                <div className={style.card_img}>
                                    <Image src={develop} alt="" />
                                </div>
                                <Card.Body>
                                    <Card.Title>Web Development</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card s content.
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card s content.
                                    </Card.Text>
                                    {/* <button className={style.btn}>Know More <FaArrowAltCircleRight /></button> */}
                                </Card.Body>
                            </div>
                            <div className={style.hov_content}>
                                <ul>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                </ul>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="d-flex justify-content-center mt-3">
                        <Card className={style.card}>
                            <div className={style.card_content}>
                                <div className={style.card_img}>
                                    <Image src={marketing} alt="" />
                                </div>
                                <Card.Body>
                                    <Card.Title>Digital Marketing</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card s content.
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card s content.
                                    </Card.Text>
                                    {/* <button className={style.btn}>Know More <FaArrowAltCircleRight /></button> */}
                                </Card.Body>
                            </div>
                            <div className={style.hov_content}>
                                <ul>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                </ul>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="d-flex justify-content-center mt-3">
                        <Card className={style.card}>
                            <div className={style.card_content}>
                                <div className={style.card_img}>
                                    <Image src={design} alt="" />
                                </div>
                                <Card.Body>
                                    <Card.Title>Graphic Design</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card s content.
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card s content.
                                    </Card.Text>
                                    {/* <button className={style.btn}>Know More <FaArrowAltCircleRight /></button> */}
                                </Card.Body>
                            </div>
                            <div className={style.hov_content}>
                                <ul>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                </ul>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Service;