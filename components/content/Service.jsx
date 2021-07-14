import { Card, Col, Row } from 'react-bootstrap';
import style from '../../styles/Service.module.css';
import Image from 'next/image';
import data from '../../Data/Services.json';
import Particles from "react-tsparticles";

const Service = () => {

    return (
        <section id="services"
            style={{ fontFamily: '"Roboto Slab", serif', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute' }}>
                <Particles height="100vw" width="100vw"
                    id="tsparticles"
                    options={{
                        background: {
                            color: {
                                value: "#fff",
                            },
                        },
                        fpsLimit: 200,
                        interactivity: {
                            detectsOn: "canvas",
                            modes: {
                                bubble: {
                                    distance: 500,
                                    duration: 10,
                                    opacity: 0.1,
                                    size: 140,
                                }
                            },
                        },
                        particles: {
                            color: {
                                value: "#0aa2c0",
                            },
                            links: {
                                color: "#fff",
                                distance: 130,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 3,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    value_area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 6,
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div>
            <div style={{ position: 'relative' }}>
                <div className={style.heading}>
                    <h3>Services We Provide</h3>
                    <div className="d-flex justify-content-center">
                        <div style={{
                            height: '3px',
                            background: '#0aa2c0',
                            width: '15%',
                            borderRadius: '20px',
                        }}></div>
                    </div>
                </div>
                <div className="container pb-3">
                    <Row>
                        {
                            data.map(item => (
                                <Col lg={3} md={4} sm={6} key={item.id}>
                                    <Card
                                        className={`text-center mt-3 p-1 ${style.card}`}>
                                        <div className={style.card_img}>
                                            <Image src={item.logo} alt={item.title} width={200} height={100} />
                                        </div>

                                        <h5 className={style.title}>{item.title}</h5>
                                        <Card.Text>
                                            <small>{item.about}</small>
                                        </Card.Text>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                    {/* <Row className={style.container}>
                    <Col md={4} className="d-flex justify-content-center mt-3">
                        <Card className={`${style.development_card} ${style.card}`}>
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
                                </Card.Body>
                            </div>
                            <div className={style.hov_content}>
                                <h5 className="text-center"><b>Web Development</b></h5><br />
                                <div className="d-flex justify-content-center">
                                    <ul>
                                        <li>lorem ipsum lorem lorem lorem</li>
                                        <li>lorem ipsum lorem lorem lorem</li>
                                        <li>lorem ipsum lorem lorem lorem</li>
                                        <li>lorem ipsum lorem lorem lorem</li>
                                        <li>lorem ipsum lorem lorem lorem</li>
                                        <li>lorem ipsum lorem lorem lorem</li>
                                        <li>lorem ipsum lorem lorem lorem</li>
                                        <li>lorem ipsum lorem lorem lorem</li>
                                    </ul>
                                </div>
                            </div>
                            <button className={style.btn}>Know More <FaArrowAltCircleRight /></button>
                        </Card>
                    </Col>
                    <Col md={4} className="d-flex justify-content-center mt-3">
                        <Card className={`${style.marketing_card} ${style.card}`}>
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
                                </Card.Body>
                            </div>
                            <div className={style.hov_content}>
                                <h5 className="text-center"><b>Digital Marketing</b></h5><br />
                                <div className="d-flex justify-content-center">
                                    <ul>
                                        <li>lorem ipsum lorem lorem lorem</li>
                                        <li>lorem ipsum lorem lorem lorem</li>
                                        <li>lorem ipsum lorem lorem lorem</li>
                                        <li>lorem ipsum lorem lorem lorem</li>
                                        <li>lorem ipsum lorem lorem lorem</li>
                                        <li>lorem ipsum lorem lorem lorem</li>
                                        <li>lorem ipsum lorem lorem lorem</li>
                                        <li>lorem ipsum lorem lorem lorem</li>
                                    </ul>
                                </div>
                            </div>
                            <button className={style.btn}>Know More <FaArrowAltCircleRight /></button>
                        </Card>
                    </Col>
                    <Col md={4} className="d-flex justify-content-center mt-3">
                        <Card className={`${style.graphic_card} ${style.card}`}>
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
                                </Card.Body>
                            </div>
                            <div className={style.hov_content}>
                                <h5 className="text-center"><b>Graphic Design</b></h5><br />
                                <div className="d-flex justify-content-center">
                                    <ul>
                                        <li>lorem ipsum lorem lorem lorem</li>
                                        <li>lorem ipsum lorem lorem lorem</li>
                                        <li>lorem ipsum lorem lorem lorem</li>
                                        <li>lorem ipsum lorem lorem lorem</li>
                                        <li>lorem ipsum lorem lorem lorem</li>
                                        <li>lorem ipsum lorem lorem lorem</li>
                                        <li>lorem ipsum lorem lorem lorem</li>
                                        <li>lorem ipsum lorem lorem lorem</li>
                                    </ul>
                                </div>
                            </div>
                            <button className={style.btn}>Know More <FaArrowAltCircleRight /></button>
                        </Card>
                    </Col>
                </Row> */}
                </div>
            </div>
        </section >
    );
};

export default Service;