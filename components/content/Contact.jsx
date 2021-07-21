import style from '../../styles/Contact.module.css';
import Clock from 'react-digital-clock';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { GoMailRead } from 'react-icons/go';

const Contact = () => {
    return (
        <section className={style.container} id="contact">
            <section className={style.content}>
                <section style={{ fontSize: '60px' }}>
                    <Clock />
                </section><br />
                <h3>ANYTIME IS PERFECT TO CONTACT WITH US !</h3><br />
                <section className="row text-center">
                    <div className="col-md-6 col-sm-6">
                        <h5><FaPhoneSquareAlt /> +8801884598626</h5>
                        <h5><FaPhoneSquareAlt /> +8801884598626</h5>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <h5><GoMailRead /> info@mitnogit.com</h5>
                        <h5><GoMailRead /> mitnogit@gmail.com</h5>
                    </div>
                </section>
            </section>
        </section>
    );
};

export default Contact;