import { Carousel } from 'react-bootstrap';
import style from '../../styles/Testimonial.module.css';
import Image from 'next/image';
import data from '../../Data/Testimonial.json';
import { AiFillStar } from 'react-icons/ai';

const Testimonial = () => {
    return (
        <>
            <Carousel controls={false} interval={3000} pause={false} fade={true} className={style.container} id="review">
                {
                    data.map(item => (
                        <Carousel.Item key={item.id}>
                            <div className={`container ${style.items}`}>
                                <div className={`p-5 ${style.item_card}`}>
                                    <Image src={item?.imageURL} alt={item.author} width={100} height={100} style={{ borderRadius: '50%' }} />
                                    <p>{item.speech}</p>
                                    <h5 style={{ color: '#ffc107' }}><AiFillStar /><AiFillStar /><AiFillStar />
                                        <AiFillStar /><AiFillStar /></h5>
                                    <h4>{item.author}</h4>
                                    <small>{item.city},{item.country}</small>
                                </div>
                            </div>
                        </Carousel.Item>))
                }
            </Carousel>
        </>
    );
};

export default Testimonial;