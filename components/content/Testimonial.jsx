import { Carousel } from 'react-bootstrap';
import style from '../../styles/Testimonial.module.css';
import Image from 'next/image';
import client1 from '../../public/client_1.png';
import client2 from '../../public/client_2.png';
import client3 from '../../public/client_3.png';
import data from '../../Data/Testimonial.json';

const Testimonial = () => {
    console.log(data)
    return (
        <section className={style.container}>
            <Carousel controls={false} interval={2000} pause={false} fade={true}>
                <Carousel.Item>
                    <div className={`container ${style.items}`}>
                        <div className={`p-5 ${style.item_card}`}>
                            <Image src={client1} alt="client1" width={100} height={100} style={{ borderRadius: '50%' }} />
                            <h2>Jhon Duo</h2>
                            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ex dignissimos porro! Velit, voluptatibus tempore assumenda doloremque repellendus eos dolore. Officiis voluptate quae ipsa labore! Nihil adipisci sapiente id numquam?</span><span>Illum odio repellendus, enim quos sint temporibus eligendi sapiente unde amet asperiores excepturi similique! Cum aut quaerat inventore, rerum eius ipsa eligendi harum quia necessitatibus. Nisi placeat magnam unde dolorum.</span></p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={`container ${style.items}`}>
                        <div className={`p-5 ${style.item_card}`}>
                            <Image src={client2} alt="client1" width={100} height={100} />
                            <h2>Jhon Duo 2</h2>
                            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ex dignissimos porro! Velit, voluptatibus tempore assumenda doloremque repellendus eos dolore. Officiis voluptate quae ipsa labore! Nihil adipisci sapiente id numquam?</span><span>Illum odio repellendus, enim quos sint temporibus eligendi sapiente unde amet asperiores excepturi similique! Cum aut quaerat inventore, rerum eius ipsa eligendi harum quia necessitatibus. Nisi placeat magnam unde dolorum.</span></p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={`container ${style.items}`}>
                        <div className={`p-5 ${style.item_card}`}>
                            <Image src={client3} alt="client1" width={100} height={100} />
                            <h2>Jhon Duo 3</h2>
                            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ex dignissimos porro! Velit, voluptatibus tempore assumenda doloremque repellendus eos dolore. Officiis voluptate quae ipsa labore! Nihil adipisci sapiente id numquam?</span><span>Illum odio repellendus, enim quos sint temporibus eligendi sapiente unde amet asperiores excepturi similique! Cum aut quaerat inventore, rerum eius ipsa eligendi harum quia necessitatibus. Nisi placeat magnam unde dolorum.</span></p>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default Testimonial;