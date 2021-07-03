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
            <Carousel activeIndex={index} onSelect={handleSelect}
                interval={10000} pause="click" touch={true}
                controls={false}>
                <Carousel.Item className={style.carouselItm}>
                    <div className={style.welcome}></div>

                    {/* <div className={style.first_img_text}>
                        <h1>Our Tech, Your Future</h1>
                    </div> */}
                </Carousel.Item>
                {/* <Carousel.Item className={style.carouselItm}>
                    <div className={style.web_development}></div>

                    <div className={style.first_img_text}>
                        <h1>Our Tech, Your Future</h1>
                        <h1>Our Tech, Your Future</h1>
                    </div>

                </Carousel.Item>
                <Carousel.Item className={style.carouselItm}>
                    <div className={style.marketing}></div>

                    <div className={style.first_img_text}>
                        <h1>Our Tech, Your Future</h1>
                        <h1>Our Tech, Your Future</h1>
                        <h1>Our Tech, Your Future</h1>
                    </div>
                </Carousel.Item>
                <Carousel.Item className={style.carouselItm}>
                    <div className={style.design}></div>

                    <div className={style.first_img_text}>
                        <h1>Our Tech, Your Future</h1>
                        <h1>Our Tech, Your Future</h1>
                        <h1>Our Tech, Your Future</h1>
                    </div>
                </Carousel.Item> */}
            </Carousel>
        </section>
    );
};

export default Welcome;