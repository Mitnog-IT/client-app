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
            <div className={style.heading}>
                <h4>We are different</h4>
            </div>
            <article className={`row ${style.row}`}>
                <Col md={6} className="d-flex justify-content-center align-items-center p-5">
                    <section>
                        <h4>We engage positive <br /> communication</h4><br />
                        <p style={{ textAlign: 'justify' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia magnam nesciunt voluptatibus omnis rerum officia expedita corporis unde laboriosam ipsa quibusdam aut veritatis praesentium laborum explicabo distinctio, deserunt eligendi ipsum?Doloremque provident est beatae qui expedita, molestias temporibus totam, animi facere hic delectus reiciendis et sunt quas ratione nulla magni libero sit! Veritatis molestiae explicabo, earum beatae deserunt vitae quod.</p>
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
                        <p style={{ textAlign: 'justify' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia magnam nesciunt voluptatibus omnis rerum officia expedita corporis unde laboriosam ipsa quibusdam aut veritatis praesentium laborum explicabo distinctio, deserunt eligendi ipsum?Doloremque provident est beatae qui expedita, molestias temporibus totam, animi facere hic delectus reiciendis et sunt quas ratione nulla magni libero sit! Veritatis molestiae explicabo, earum beatae deserunt vitae quod.</p>
                    </section>
                </Col>
            </article>
            <article className={`row ${style.row}`}>
                <Col md={6} className="d-flex justify-content-center align-items-center p-5">
                    <section>
                        <h4>We have a awesome<br /> hard worker team</h4> <br />
                        <p style={{ textAlign: 'justify' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia magnam nesciunt voluptatibus omnis rerum officia expedita corporis unde laboriosam ipsa quibusdam aut veritatis praesentium laborum explicabo distinctio, deserunt eligendi ipsum?Doloremque provident est beatae qui expedita, molestias temporibus totam, animi facere hic delectus reiciendis et sunt quas ratione nulla magni libero sit! Veritatis molestiae explicabo, earum beatae deserunt vitae quod.</p>
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