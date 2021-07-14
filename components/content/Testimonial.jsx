import { Carousel } from 'react-bootstrap';
import style from '../../styles/Testimonial.module.css';
import Image from 'next/image';
import client1 from '../../public/client_1.png';
import data from '../../Data/Testimonial.json';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
// import SingleTestimonial from './SingleTesmonial';

const Testimonial = (props) => {
    console.log("props is:", props)
    return (
        <>
            <Carousel controls={false} interval={3000} pause={false} fade={true} className={style.container}>
                {/* <h3 classNameName="text-light pt-3">What our clients are saying</h3> */}
                {
                    data.map(item => (
                        <Carousel.Item key={item.id}>
                            <div className={`container ${style.items}`}>
                                <div className={`p-5 ${style.item_card}`}>
                                    <Image src={client1} alt="client1" width={100} height={100} style={{ borderRadius: '50%' }} />
                                    <p>{item.speech}</p>
                                    <h5 className="text-warning"><AiFillStar /><AiFillStar /><AiFillStar />
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