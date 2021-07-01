import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import style from '../../styles/Welcome.module.css';
import image1 from '/public/welcome.jpeg';
import Image from 'next/image'

const Welcome = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <section className={style.container}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className={style.carouselItm}>
                    {/* <Image src={image1} width={1400} height={600} alt="First slide" /> */}
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={image1} width={1400} height={600} alt="Second slide" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={image1} width={1400} height={600} alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default Welcome;