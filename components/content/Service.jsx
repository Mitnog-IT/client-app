import { Card, Col, Row } from 'react-bootstrap';
import style from '../../styles/Service.module.css';
import marketing from '../../public/digital-marketing.png';
import develop from '../../public/programming.png';
import design from '../../public/graphic-design.png';
import Image from 'next/image';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import data from '../../Data/Services.json';
import { AnimationWrapper, useHover } from 'react-hover-animation';

const Service = () => {
    const { spring, animated, setHover } = useHover({
        color: {
            initial: 'black',
            onHover: 'red',
        },
        animationConfig: {
            duration: 500,
        },
    })

    return (
        <section id="services"
            style={{ fontFamily: '"Roboto Slab", serif', padding: '30px 0px' }}>
            <div className={style.heading}>
                <h3>Our Services</h3>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            </div>
            <div className="container">
                <Row>
                    {
                        data.map(item => (
                            <Col lg={3} md={4} sm={6} key={item.id}>
                                <Card
                                    className={`text-center mt-3 p-1 ${style.card}`}>
                                    <div className={style.card_img}>
                                        <Image src={item.logo} alt={item.title} width={200} height={100} />
                                    </div>

                                    <h5>{item.title}</h5>
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
        </section >
    );
};

export default Service;