import Image from 'next/image';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import style from '../../styles/Capacity.module.css';
import communication from '../../public/communication.jpg';
import marketing from '../../public/Business-Marketing.jpg';
import team from '../../public/team.jpg';

const Capacity = () => {
    return (
        <section id="capacity" style={{
            fontFamily: '"Roboto Slab", serif',
            paddingTop: '30px',
            overflow: 'hidden',
        }}>
            {/* <div className={style.heading}>
                <h4>We are different</h4>
            </div> */}
            <article className={`row ${style.row}`}>
                <Col md={6} className="d-flex justify-content-center align-items-center p-5">
                    <section>
                        <h4>We engage positive <br /> communication</h4><br />
                        <p style={{ textAlign: 'justify' }}>We are very organized handle our clients,s. We give extra value our every single client. We provide one by one support our every client. Every team member communicates with every single client very smartly and discusses the project very fluently.<br /><br />We have Corporate Clients we absolutely handle our corporate clients organized. We give expensive value to our corporate clients.</p>
                    </section>
                </Col>
                <Col md={6} style={{ position: 'relative' }}>
                    <div>
                        <Image src={communication} layout="fill" objectFit='fill' alt="positive communication" />
                    </div>
                </Col>
            </article>
            <article className={`row ${style.row}`}>
                <Col md={6} style={{ position: 'relative' }}>
                    <div>
                        <Image src={marketing} layout="fill" objectFit='fill' alt="Positive business marketing" />
                    </div>
                </Col>
                <Col md={6} className="d-flex justify-content-center align-items-center p-5">
                    <section>
                        <h4>Positive business and<br /> marketing</h4> <br />
                        <p style={{ textAlign: 'justify' }}>We can provide every client with positive business and marketing satisfaction. We have a very expert and experienced Marketing team. Our team has more and more experience in this(2015-2021) new marketing strategy or competitive marketplace. For this experience, we guarantee you that If you can work with Mitnog IT you can get the best Business and Marketing satisfaction.</p>
                    </section>
                </Col>
            </article>
            <article className={`row ${style.row}`}>
                <Col md={6} className="d-flex justify-content-center align-items-center p-5">
                    <section>
                        <h4>We have a awesome<br /> hard worker team</h4> <br />
                        <p style={{ textAlign: 'justify' }}>Our team is maintained by an organized team leader and our team is very organized. Every single team member follows our rules. Every member Promised hard work and complete every single client project within the required times. Every member promised to Mitnog IT they give every single client satisfaction with their hard-working.</p>
                    </section>
                </Col>
                <Col md={6} style={{ position: 'relative' }}>
                    <div>
                        <Image src={team} layout="fill" objectFit='fill' alt="" />
                    </div>
                </Col>
            </article>
        </section>
    );
};

export default Capacity;